import Image from "next/image";
import Wrapper from "@/app/components/UI/Wrapper";
import ArticleHeader from "@/app/components/Blog/ArticleHeader";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import BlogImage from "@/app/components/mdx/BlogImage";
import TwoColumn from "@/app/components/mdx/TwoColumn";

import Link from "next/link";
import BackArrow from "@/app/components/Icons/BackArrow";

export default function Story({ params }) {
  const props = getPost(params);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: props.frontMatter.title,
    image: props.frontMatter.image,
    editor: props.frontMatter.editor,
    genre: "search engine optimization",
    keywords: "virac publication catanduanes",
    url: `https://viracspecial.com/story/${props.frontMatter.slug}`,
    datePublished: props.frontMatter.datePublished,
    dateCreated: props.frontMatter.datePublished,
    dateModified: props.frontMatter.datePublished,
    description: props.frontMatter.description,
    author: {
      "@type": "Person",
      name: props.frontMatter.author,
    },
  };

  return (
    <Wrapper className="md:my-8 my-4" isSmall={true}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href="/"
        className="h-6 group md:text-sm text-xs md:mb-6 my-3 inline-block"
      >
        <div
          className="group-hover:border-b group-hover:border-black transition-colors
          pb-1 flex items-center gap-x-2"
        >
          <BackArrow className="w-6" />
          <span>Back to stories</span>
        </div>
      </Link>
      <div
        className={`relative overflow-hidden w-full 
          bg-cover bg-center pt-[50%] group mb-2`}
      >
        <Image
          className="w-full h-full absolute top-0
            left-0 object-cover"
          src={props.frontMatter.image}
          width="1000"
          height="1000"
          alt="The front side of the Sea Breeze restaurant building"
        />
      </div>
      <ArticleHeader
        title={props.frontMatter.title}
        detail={props.frontMatter.description}
        author={props.frontMatter.author}
        editor={props.frontMatter.editor}
        photoAuthor={props.frontMatter.photos}
        date={props.frontMatter.date}
        categories={props.frontMatter.categories}
      />
      <article
        className="flex flex-col space-y-8
          leading-9 font-merriweather md:px-10"
      >
        <MDXRemote
          source={props.content}
          components={{ BlogImage, TwoColumn }}
        />
      </article>
    </Wrapper>
  );
}

function getPost({ slug, issue }) {
  const markdownFile = fs.readFileSync(
    path.join(`stories/${issue}`, slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("stories"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

export async function generateMetadata({ params }) {
  const blog = getPost(params);

  return {
    title: blog.frontMatter.title + " | Virac Special",
    description: blog.frontMatter.description,
    twitter: {
      card: "summary_large_image",
      title: blog.frontMatter.title + " | Virac Special",
      description: blog.frontMatter.description,
      creator: "@kenkozma",
      images: ["https://viracspecial.com" + blog.frontMatter.image],
    },
    openGraph: {
      title: blog.frontMatter.title + " | Virac Special",
      description: blog.frontMatter.description,
      url: "https://viracspecial.com/" + 'story/' + blog.frontMatter.issue + '/' + blog.frontMatter.slug,
      siteName: "Virac Special",
      images: [
        {
          url: "https://viracspecial.com" + blog.frontMatter.image,
          width: 800,
          height: 600,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}
