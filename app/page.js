import Wrapper from "./components/UI/Wrapper";
import IssuePreview from "./components/Blog/IssuePreview";
import IssueStories from "./components/Blog/IssueStories";

export default function Home() {
  return (
    <main className="md:my-10 my-6">
      <Wrapper>
        <section className="flex flex-col md:space-y-12 space-y-8">
          <IssuePreview />
          <IssueStories className="col-span-5" />
        </section>
      </Wrapper>
    </main>
  );
}
