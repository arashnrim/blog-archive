import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className="fixed z-50 flex items-center w-screen h-20 p-5 lg:flex-col lg:h-screen lg:w-28 bg-gradient-to-b lg:bg-gradient-to-r lg:space-y-6 from-black backdrop-filter backdrop-blur-sm">
      <Link href="/" passHref={true}>
        <span className="p-3 transition cursor-pointer w-min bg-opacity-5 hover:opacity-75">
          <span className="font-mono text-2xl italic">fn()</span>
        </span>
      </Link>
      {(router.asPath === "/" ||
        router.asPath === "/about" ||
        router.asPath === "/404") && (
        <nav className="flex flex-row justify-center pl-5 space-x-5 lg:items-center lg:flex-col lg:pl-0 lg:space-x-0 lg:space-y-8 lg:w-full">
          <Link href="/about" passHref>
            <a className="text-xl text-center underline-offset-0 lg:vertical-text">
              about
            </a>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
