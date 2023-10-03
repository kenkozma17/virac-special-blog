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

export async function generateMetadata({ params }) {
  const meta = {
    title: "Virac Special",
    description:
      "Celebrating Virac's Finest Businesses: Explore exclusive articles on local enterprises in Virac with Virac Special. Discover success stories, insights, and more in our insightful publication.",
    image: "/images/issues/1/cover.webp",
    url: "https://viracspecial.com",
  };
  return {
    title: meta.title,
    description: meta.description,
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      creator: "@kenkozma",
      images: [meta.url + meta.image],
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.url,
      siteName: meta.title,
      images: [
        {
          url: meta.url + meta.image,
          width: 800,
          height: 600,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}
