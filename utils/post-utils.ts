import matter from "gray-matter";
import fs from "fs";
import path from "path";
import process from "process";
import readingTime from "reading-time";

export interface Frontmatter {
  date: string;
  description?: string;
  tags?: string[];
  title: string;
  slug: string;
  words: number;
  time: number;
}

export const fetchAllPosts = (dateOptions?: object) => {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"), "utf-8");
  const postFrontmatters = files.map((file) => {
    const unprocessedContent = fs.readFileSync(
      path.join(process.cwd(), "posts", file),
      "utf-8"
    );

    const { data: frontmatter, content  } = matter(unprocessedContent);

    // Generating the slug to the post
    frontmatter["slug"] = "/" + file.replace(".mdx", "");

    // Generating the date the post was made
    const date = new Date(frontmatter["date"]);
    const defaultDateOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    frontmatter["date"] = date.toLocaleDateString(
      "en-SG",
      dateOptions ? dateOptions : defaultDateOptions
    );

    // Generating the tags attached to the post
    const tags = frontmatter["tags"];
    typeof tags === "string"
      ? (frontmatter["tags"] = tags.split(","))
      : (frontmatter["tags"] = tags);

    // Generating the reading time of the post
    const time = readingTime(content);
    frontmatter["words"] = time.words;
    frontmatter["time"] = Math.round(time.minutes);

    return frontmatter;
  });

  return postFrontmatters;
};

export const retrieveProjectKey = () => {
  const projectKey = process.env.PROJECT_KEY;
  if (projectKey === undefined) {
    throw "PROJECT_KEY was not found in the environment variables. Have you pulled or updated or environment variables?";
  }
  return projectKey;
};
