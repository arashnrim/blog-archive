import InlineLink from "./InlineLink";

const Hero = () => {
  return (
    <section className="w-screen h-[50vh] bg-gradient-to-b from-black to-[#0a0a0a] rounded-b-3xl flex flex-col justify-center px-10 md:px-20 lg:px-40">
      <h1 className="font-mono text-4xl italic break-all sm:text-6xl 2xl:text-7xl">
        function()
      </h1>
      <p className="mt-5 text-lg sm:text-xl">
        <InlineLink link="https://arash.codes" redirect={true}>
          Arash&#39;s
        </InlineLink>{" "}
        blog to share little snippets of everything — code, experiences, and
        other fascinating stories to share.
      </p>
    </section>
  );
};

export default Hero;
