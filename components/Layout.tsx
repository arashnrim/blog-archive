import React from "react";

import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  className?: string;
  children: React.ReactNode;
}

const Layout = ({ className = "", children }: LayoutProps) => (
  <>
    <Header />
    <main className={className}>{children}</main>
    <Footer />
  </>
);

export default Layout;
