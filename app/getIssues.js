import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { readdir } from "fs/promises";

export const directories = (await readdir("stories", { withFileTypes: true }))
  .filter((dirent) => dirent.isDirectory())
  .map((dir) => dir.name);

export const getStories = (issueNumber) => {
  let issue = issueNumber;
  if (issueNumber === "latest") {
    issue = Math.max(...directories);
  }
  const blogDir = `stories/${issue}`;
  const files = fs.readdirSync(path.join(blogDir));

  return files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    // 5) Extract the metadata from the blog's content
    const { data: frontMatter } = matter(fileContent);

    // 6) Return the metadata and page slug
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });
};
