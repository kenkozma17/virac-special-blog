export default function sitemap() {
  const blogDir = "stories";
  const files = fs.readdirSync(path.join(blogDir));

  const storiesXml = files.map((filename) => {
    return {
      url: "https://viracspecial.com/story/" + filename.replace(".mdx", ""),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  return [
    {
      url: "https://viracspecial.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...storiesXml,
  ];
}
