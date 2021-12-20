import matter from "gray-matter";
import fs from "fs";
import path from "path";
import process from "process";

export interface Frontmatter {
  date: string;
  description?: string;
  tags?: string[];
  title: string;
  slug?: string;
  words?: number;
}

export const fetchAllPosts = (dateOptions?: object) => {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"), "utf-8");
  const postFrontmatters = files.map((file) => {
    const unprocessedContent = fs.readFileSync(
      path.join(process.cwd(), "posts", file),
      "utf-8"
    );
    const frontmatter = matter(unprocessedContent).data;
    frontmatter["slug"] = "/" + file.replace(".mdx", "");
    const unparsedDate = new Date(frontmatter["date"]);
    const defaultDateOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    frontmatter["date"] = unparsedDate.toLocaleDateString(
      "en-SG",
      dateOptions ? dateOptions : defaultDateOptions
    );
    const tags = frontmatter["tags"];
    typeof tags === "string"
      ? (frontmatter["tags"] = tags.split(","))
      : (frontmatter["tags"] = tags);
    return frontmatter;
  });

  return postFrontmatters;
};

export const calculatePostReadingTime = (numberOfWords: number) => {
  let minutes = numberOfWords / 200;
  let seconds = (minutes % 1) * 0.6 * 100;
  minutes = Math.round(minutes);
  seconds = Math.round(seconds);

  return Math.round(minutes + seconds / 60);
};

export const retrieveProjectKey = () => {
  const projectKey = process.env.PROJECT_KEY;
  if (projectKey === undefined) {
    throw "PROJECT_KEY was not found in the environment variables. Have you pulled or updated or environment variables?";
  }
  return projectKey;
};
