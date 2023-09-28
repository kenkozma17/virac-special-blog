import Wrapper from "./components/UI/Wrapper";
import IssuePreview from "./components/Blog/IssuePreview";
import IssueStories from "./components/Blog/IssueStories";

export default function Home() {
  return (
    <main className="md:my-10 my-6">
      <Wrapper>
        <section className="grid grid-cols-12 md:space-x-6">
          <IssuePreview className="col-span-7" />
          <IssueStories className="col-span-5" />
        </section>
      </Wrapper>
    </main>
  );
}
