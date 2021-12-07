import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

interface LayoutProps {
  className?: string;
  children: React.ReactNode;
  postTitle?: string;
  postDescription?: string;
  postURL?: string;
}

const Layout = ({
  className = "",
  children,
  postTitle,
  postDescription,
  postURL,
}: LayoutProps) => (
  <>
    <Meta
      title={postTitle ? postTitle : undefined}
      description={postDescription ? postDescription : undefined}
      isBlogPost={postTitle ? true : undefined}
      url={postURL ? postURL : undefined}
    />
    <Header />
    <main className={className + " min-h-screen"}>{children}</main>
    <Footer />
  </>
);

export default Layout;
