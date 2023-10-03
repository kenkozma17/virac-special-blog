import IssueCount from "./IssueCount";
import StoryCard from "./StoryCard";

export default function IssueStories({ className, stories }) {
  return (
    <aside
      className={`${className} md:pt-14 pt-10 
      relative border-t-2 border-black inline-b`}
    >
      <IssueCount className="absolute top-0 left-0">
        Stories of Issue 9
      </IssueCount>
      <div className="grid md:grid-cols-6 md:gap-6 gap-3">
        {stories.map((story, index) => (
          <StoryCard
            url={`/story/${story.meta.slug}`}
            key={story.meta.slug}
            className={`${
              [0, 1].includes(index) ? "md:col-span-3" : "md:col-span-2"
            }`}
            storyTitle={story.meta.title}
            storyDetail={story.meta.description}
            categories={story.meta.categories}
            imagePath={story.meta.image}
            imagePadding="50"
          />
        ))}
      </div>
    </aside>
  );
}
