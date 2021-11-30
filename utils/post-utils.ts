import matter from "gray-matter";

export interface Frontmatter {
  date: string;
  description?: string;
  tags?: string[];
  title: string;
  slug?: string;
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
