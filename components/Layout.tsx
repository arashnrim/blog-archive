import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  className?: string;
  children: React.ReactNode;
}

const Layout = ({ className = "", children }: LayoutProps) => (
  <>
    <Header />
    <main className={className + " min-h-screen"}>{children}</main>
    <Footer />
  </>
);

export default Layout;
