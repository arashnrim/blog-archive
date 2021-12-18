import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Posts from "../components/Posts";
import { fetchAllPosts, Frontmatter } from "../utils/post-utils";

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
  const postFrontmatters = fetchAllPosts();

  return {
    props: {
      frontmatters: postFrontmatters,
    },
  };
};

export default Index;
