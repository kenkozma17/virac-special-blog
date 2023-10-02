import Image from "next/image";
import Wrapper from "../../components/UI/Wrapper";
import ArticleHeader from "../../components/Blog/ArticleHeader";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import BlogImage from "../../components/mdx/BlogImage";
import TwoColumn from "../../components/mdx/TwoColumn";

export default function Story({ params }) {
  const props = getPost(params);
  return (
    <>
      <Wrapper className="md:my-8 my-4" isSmall={true}>
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
    </>
  );
}

function getPost({ slug }) {
  const markdownFile = fs.readFileSync(
    path.join("stories", slug + ".mdx"),
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
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}
