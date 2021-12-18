import Link from "next/link";
import { FaCalendar, FaClock, FaTag, FaTags } from "react-icons/fa";
import { calculatePostReadingTime, Frontmatter } from "../utils/post-utils";

interface PostsProps {
  frontmatters: Frontmatter[];
}

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

const Posts = ({ frontmatters }: PostsProps) => {
  return (
    <section className="grid grid-cols-1 px-10 py-10 lg:grid-cols-2 lg:py-20 md:px-12 lg:px-20 gap-y-10 lg:gap-10">
      {frontmatters ? (
        frontmatters.map((frontmatter) => {
          const readingTime = frontmatter.words
            ? calculatePostReadingTime(frontmatter.words)
            : undefined;
          return (
            <Link href={frontmatter.slug!} key={frontmatter.title} passHref>
              <div className="p-10 space-y-2 transition-colors duration-200 border border-gray-700 cursor-pointer hover:border-blue-400 rounded-2xl">
                <h2 className="text-4xl font-bold font-heading">
                  {frontmatter.title}
                </h2>
                {frontmatter.description ? (
                  <p className="sm:text-lg md:text-xl">
                    {frontmatter.description}
                  </p>
                ) : null}
                <span className="flex flex-row items-center space-x-2">
                  <FaCalendar />
                  <p>{frontmatter.date}</p>
                </span>
                <span className="flex flex-row items-center space-x-2">
                  <FaClock />
                  <p>{readingTime} minutes</p>
                </span>
                {frontmatter.tags === undefined ? null : (
                  <span className="flex flex-row items-center space-x-2">
                    {frontmatter.tags.length > 1 ? <FaTags /> : <FaTag />}
                    {frontmatter.tags.map((tag) => (
                      <Link href={`/tags/${tag}`} key={tag} passHref>
                        <p
                          className="px-2 transition-colors duration-200 border border-gray-700 rounded-lg cursor-pointer hover:border-blue-400"
                          key={tag}
                        >
                          {tag}
                        </p>
                      </Link>
                    ))}
                  </span>
                )}
              </div>
            </Link>
          );
        })
      ) : (
        <Placeholder />
      )}
    </section>
  );
};

export default Posts;
