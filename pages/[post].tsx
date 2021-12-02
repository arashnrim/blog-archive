import fs from "fs";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import { useMemo } from "react";
import { FaClock } from "react-icons/fa";
import rehypePrism from "rehype-prism-plus";
import Layout from "../components/Layout";
import { Frontmatter } from "../utils/post-utils";
import type { NextPage } from "next";

interface PostProps {
  frontmatter: Frontmatter;
  code: string;
}

const Post: NextPage<PostProps> = ({ frontmatter, code }: PostProps) => {
  const RenderedComponent = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <Layout>
        <section className="h-[33vh] bg-black pb-10 flex flex-col justify-end rounded-b-3xl px-10 md:px-20 lg:px-40">
          <h1 className="text-4xl font-bold font-heading sm:text-5xl lg:text-7xl 2xl:text-8xl">
            {frontmatter.title}
          </h1>
          <span className="flex items-center space-x-2 sm:text-xl md:text-2xl">
            <FaClock />
            <p>{frontmatter.date}</p>
          </span>
        </section>
        <article className="px-20 py-10 prose prose-lg lg:py-20 sm:prose-xl md:prose-2xl max-w-none md:px-40 lg:px-80">
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
    },
  };
};

export default Post;
