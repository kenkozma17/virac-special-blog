import Wrapper from "./../UI/Wrapper";
import IssueStories from "./IssueStories";
import IssueSelector from "./IssueSelector";
export default function MainBlog({ stories, issueNumber }) {
  return (
    <main className="md:my-10 my-6">
      <Wrapper>
        <section className="flex flex-col md:space-y-8 space-y-8">
          <IssueSelector issue={issueNumber} />
          <IssueStories stories={stories} />
        </section>
      </Wrapper>
    </main>
  );
}
