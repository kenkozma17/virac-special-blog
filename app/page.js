import Wrapper from "./components/UI/Wrapper";
import IssuePreview from "./components/Blog/IssuePreview";
import IssueStories from "./components/Blog/IssueStories";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home() {
  const blogDir = "stories";
  const files = fs.readdirSync(path.join(blogDir));

  const stories = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    // 5) Extract the metadata from the blog's content
    const { data: frontMatter } = matter(fileContent);

    // 6) Return the metadata and page slug
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <main className="md:my-10 my-6">
      <Wrapper>
        <section className="flex flex-col md:space-y-8 space-y-8">
          <IssuePreview />
          <IssueStories stories={stories} />
        </section>
      </Wrapper>
    </main>
  );
}
