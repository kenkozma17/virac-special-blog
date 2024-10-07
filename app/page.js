import MainBlog from "./components/Blog/MainBlog";
import { getStories, directories } from "./getIssues";

export default function Home({ params }) {
  return <MainBlog stories={getStories("latest")} />;
}

export async function generateMetadata({ params }) {
  const meta = {
    title: "Virac Special",
    description:
      "Celebrating Virac's Finest Businesses: Explore exclusive articles on local enterprises in Virac with Virac Special. Discover success stories, insights, and more in our insightful publication.",
    image: "/images/issues/1/dakila-cafe/cover.webp",
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
      // images: [
      //   {
      //     url: meta.url + meta.image,
      //     width: 800,
      //     height: 600,
      //   },
      // ],
      locale: "en_US",
      type: "website",
    },
  };
}
