const Placeholder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-5 py-10 space-y-5 text-center border border-yellow-600 rounded-3xl">
      <span className="text-4xl">👋</span>
      <h2 className="text-4xl font-bold text-center sm:text-5xl lg:text-6xl 2xl:text-7xl font-heading">
        Oh, hello there!
      </h2>
      <p className="text-sm lg:w-2/3 sm:text-lg 2xl:text-xl">
        It seems like you&#39;ve found my blog while it&#39;s still under
        development. Thanks for searching this far!
        <br />
        <br />
        You might want to check again soon when it&#39;s ready. It might take a
        while!
      </p>
    </div>
  );
};

const Posts = () => {
  return (
    <section className="flex items-center justify-center w-screen h-auto px-10 py-10 md:px-12 lg:px-20">
      <Placeholder />
    </section>
  );
};

export default Posts;
