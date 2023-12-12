import MainBlog from "@/app/components/Blog/MainBlog";
import { getStories } from "@/app/getIssues";
export default function Issue({ params }) {
  return (
    <MainBlog issueNumber={params.slug} stories={getStories(params.slug)} />
  );
}
