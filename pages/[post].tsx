import fs from "fs";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import { useMemo } from "react";
import { FaCalendar, FaClock } from "react-icons/fa";
import rehypePrism from "rehype-prism-plus";
import Layout from "../components/Layout";
import { Frontmatter } from "../utils/post-utils";
import type { NextPage } from "next";
import { calculatePostReadingTime } from "../utils/post-utils";

interface PostProps {
  frontmatter: Frontmatter;
  code: string;
  slug?: string;
}

const Post: NextPage<PostProps> = ({ frontmatter, code, slug }: PostProps) => {
  const RenderedComponent = useMemo(() => getMDXComponent(code), [code]);
  const readingTime = useMemo(
    () =>
      frontmatter.words
        ? calculatePostReadingTime(frontmatter.words)
        : undefined,
    [frontmatter.words]
  );

  return (
    <>
      <Layout
        postTitle={frontmatter.title}
        postDescription={frontmatter.description}
        postURL={"https://blog.arash.codes/" + slug}
      >
        <section className="h-[50vh] bg-black pb-10 flex flex-col justify-end rounded-b-3xl px-10 md:px-20 lg:px-40">
          <h1 className="text-4xl font-bold font-heading sm:text-6xl lg:text-7xl 2xl:text-8xl">
            {frontmatter.title}
          </h1>
          <span className="flex items-center pt-5 space-x-2 sm:text-xl">
            <FaCalendar title="Date written" aria-label="Reading time" />
            <p>{frontmatter.date}</p>
          </span>
          <span className="flex items-center space-x-2 sm:text-xl">
            <FaClock title="Reading time" aria-label="Reading time" />
            <p>{readingTime} minutes</p>
          </span>
        </section>
        <article className="py-10 prose prose-lg px-14 lg:py-20 sm:prose-xl md:prose-2xl max-w-none md:px-36 lg:px-64 xl:px-72 2xl:px-80">
          <RenderedComponent />
        </article>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"), "utf-8");
  const paths = files.map((file) => ({
    params: {
      post: file.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.post;
  const unprocessedContent = fs
    .readFileSync(path.join("posts", slug + ".mdx"), "utf-8")
    .trim();

  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "esbuild.exe"
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    );
  }

  const { code, frontmatter } = await bundleMDX({
    source: unprocessedContent,
    xdmOptions(options) {
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypePrism];

      return options;
    },
  });

  return {
    props: {
      frontmatter,
      code,
      slug,
    },
  };
};

export default Post;
