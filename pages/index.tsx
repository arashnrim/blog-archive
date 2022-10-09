import { useCallback, useEffect, useState } from "react";
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
  const [searchValue, setSearchValue] = useState("");
  const [displayedPosts, setDisplayedPosts] = useState(frontmatters);
  const filterPosts = useCallback(() => {
    setDisplayedPosts(
      frontmatters.filter((frontmatter) => {
        return (
          frontmatter.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          (frontmatter.description
            ? frontmatter.description
                .toLowerCase()
                .includes(searchValue.toLowerCase())
            : true)
        );
      })
    );
  }, [searchValue]);

  useEffect(() => {
    filterPosts();
  }, [searchValue]);

  return (
    <Layout>
      <Hero />
      <>
        <input
          className="mx-10 mt-5 lg:mt-10 md:mx-20 lg:mx-40 bg-transparent w-[calc(100vw-20rem)] border-gray-700 hover:border-gray-500 border p-3 rounded-xl appearance-none"
          placeholder="Search for a post (experimental!)"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Posts frontmatters={displayedPosts} />
      </>
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
