import fs from "fs";
import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import { FaCalendar, FaClock } from "react-icons/fa";
import rehypeSlug from "rehype-slug";
import Feedback from "../components/Feedback";
import Layout from "../components/Layout";
import { fetchAllPosts, Frontmatter } from "../utils/post-utils";
import remarkGfm from "remark-gfm";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Prompt from "../components/Prompt";
import Resource from "../components/Resource";
import rehypeHighlight from "rehype-highlight";
// @ts-ignore
import rehypeFigure from "rehype-figure";

interface PostProps {
  frontmatter: Frontmatter;
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
  slug?: string;
}

const Post: NextPage<PostProps> = ({
  frontmatter,
  source,
  slug,
}: PostProps) => {
  return (
    <>
      <Layout
        postTitle={frontmatter.title}
        postDescription={frontmatter.description}
        postURL={"https://blog.arashnrim.me/" + slug}
      >
        <section className="flex flex-col justify-end h-auto px-10 pt-40 pb-10 bg-gradient-to-b from-black rounded-b-3xl md:px-20 lg:px-40">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl 2xl:text-8xl">
            {frontmatter.title}
          </h1>
          <span className="flex items-center pt-5 space-x-2 sm:text-xl">
            <FaCalendar title="Date written" aria-label="Reading time" />
            <p>{frontmatter.date}</p>
          </span>
          <span className="flex items-center space-x-2 sm:text-xl">
            <FaClock title="Reading time" aria-label="Reading time" />
            <p>{frontmatter.time} minutes</p>
          </span>
        </section>
        <section className="px-10 pt-10 space-y-10 lg:pt-20 md:px-20 lg:px-40">
          <article className="prose prose-lg text-white prose-invert sm:prose-xl md:prose-2xl prose-pre:bg-black wrapper">
            <MDXRemote {...source} components={{ Prompt, Resource }} />
          </article>
          <Feedback />
        </section>
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

  const frontmatter = fetchAllPosts().find(
    (post) => post.slug.substring(1) === slug
  );

  const source = await serialize(unprocessedContent, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeHighlight, rehypeFigure],
    },
    parseFrontmatter: true,
  });

  return {
    props: {
      frontmatter,
      source,
      slug,
    },
  };
};

export default Post;
