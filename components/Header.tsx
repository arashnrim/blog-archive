import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed flex z-50 p-5 items-center w-screen lg:h-20 bg-black bg-opacity-[0.025] backdrop-filter backdrop-blur-sm">
      <Link href="/" passHref={true}>
        <span className="p-3 transition cursor-pointer w-min bg-opacity-5 hover:opacity-75">
          <span className="font-mono text-2xl font-bold">#</span>
          <span className="font-sans text-2xl font-bold">A</span>
        </span>
      </Link>
    </header>
  );
};

export default Header;
