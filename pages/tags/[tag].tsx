import fs from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import Layout from "../../components/Layout";
import Posts from "../../components/Posts";
import { fetchPostFrontmatter, Frontmatter } from "../../utils/post-utils";
import { FiChevronLeft } from "react-icons/fi";

interface TagProps {
  tag: string;
  posts: Frontmatter[];
}

const Tag = ({ tag, posts }: TagProps) => {
  return (
    <Layout>
      <section className="h-[33vh] bg-black pb-10 flex flex-col justify-end rounded-b-3xl px-10 md:px-20 lg:px-40">
        <button type="button" onClick={() => window.history.back()}>
          <span className="flex flex-row items-center space-x-2 text-lg">
            <FiChevronLeft />
            <p>Go back</p>
          </span>
        </button>
        <h1 className="text-4xl font-bold font-heading sm:text-5xl lg:text-7xl 2xl:text-8xl">
          {tag}
        </h1>
        <span className="space-x-2 sm:text-xl md:text-2xl">
          Post categorised under the {tag} tag can be found here.
        </span>
      </section>
      <Posts frontmatters={posts} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  let storedTags: string[] = [];
  const files = fs.readdirSync(path.join(process.cwd(), "posts"), "utf-8");
  files.map((file) => {
    const unprocessedContent = fs.readFileSync(
      path.join(process.cwd(), "posts", file),
      "utf-8"
    );
    const frontmatter = fetchPostFrontmatter(unprocessedContent, file);
    const tags: string[] = frontmatter.tags;
    tags.forEach((tag) => {
      if (!storedTags.includes(tag)) {
        storedTags.push(tag);
      }
    });
  });

  let paths = storedTags.map((tag) => ({
    params: {
      tag,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params!.tag as string;
  let storedPosts: object[] = [];
  const files = fs.readdirSync(path.join(process.cwd(), "posts"), "utf-8");
  files.map((file) => {
    const unprocessedContent = fs.readFileSync(
      path.join(process.cwd(), "posts", file),
      "utf-8"
    );
    const frontmatter = fetchPostFrontmatter(unprocessedContent, file);
    const tags: string[] = frontmatter.tags;
    if (tags.includes(tag)) {
      storedPosts.push(frontmatter);
    }
  });

  return {
    props: {
      tag,
      posts: storedPosts,
    },
  };
};

export default Tag;
