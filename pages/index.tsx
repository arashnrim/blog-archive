import type { NextPage } from "next";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Posts from "../components/Posts";

const Index: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Posts />
    </Layout>
  );
};

export default Index;
