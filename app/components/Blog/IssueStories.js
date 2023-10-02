import IssueCount from "./IssueCount";
import StoryCard from "./StoryCard";

export default function IssueStories({ className, stories }) {
  console.log(stories);
  return (
    <aside
      className={`${className} pt-10 
      relative border-t-2 border-black inline-b`}
    >
      <IssueCount className="absolute top-0 left-0">
        Stories of Issue 1
      </IssueCount>
      <div className="grid md:grid-cols-6">
        {stories.map((story) => (
          <StoryCard
            url={`/story/${story.meta.slug}`}
            key={story.meta.slug}
            className="md:mr-6 md:mb-6 col-span-3"
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
