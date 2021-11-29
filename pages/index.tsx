import fs from "fs";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import path from "path";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Posts from "../components/Posts";
import matter from "gray-matter";
import { Frontmatter } from "../utils/post";

interface IndexProps {
  frontmatters: Frontmatter[];
}

const Index: NextPage<IndexProps> = ({ frontmatters }: IndexProps) => {
  return (
    <Layout>
      <Hero />
      <Posts frontmatters={frontmatters} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"), "utf-8");
  const postFrontmatters = files.map((file) => {
    const unprocessedContent = fs.readFileSync(
      path.join(process.cwd(), "posts", file),
      "utf-8"
    );
    const frontmatter = matter(unprocessedContent).data;
    frontmatter["slug"] = "/" + file.replace(".mdx", "");
    const tags = frontmatter["tags"];
    typeof tags === "string"
      ? (frontmatter["tags"] = tags.split(","))
      : (frontmatter["tags"] = tags);
    return frontmatter;
  });

  return {
    props: {
      frontmatters: postFrontmatters,
    },
  };
};

export default Index;
