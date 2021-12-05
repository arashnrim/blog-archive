import matter from "gray-matter";

export interface Frontmatter {
  date: string;
  description?: string;
  tags?: string[];
  title: string;
  slug?: string;
  words?: number;
}

export const fetchPostFrontmatter = (
  unprocessedContent: string,
  file: string
) => {
  const frontmatter = matter(unprocessedContent).data;
  frontmatter["slug"] = "/" + file.replace(".mdx", "");
  const tags = frontmatter["tags"];
  typeof tags === "string"
    ? (frontmatter["tags"] = tags.split(","))
    : (frontmatter["tags"] = tags);
  return frontmatter;
};

export const calculatePostReadingTime = (numberOfWords: number) => {
  let minutes = numberOfWords / 200;
  let seconds = (minutes % 1) * 0.6 * 100;
  minutes = Math.round(minutes);
  seconds = Math.round(seconds);

  return Math.round(minutes + seconds / 60);
};
