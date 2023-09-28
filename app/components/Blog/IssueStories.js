import IssueCount from "./IssueCount";
import StoryCard from "./StoryCard";

export default function IssueStories(props) {
  return (
    <aside
      className={`${props.className} pt-10 
      relative border-t-2 border-black inline-b`}
    >
      <IssueCount className="absolute top-0 left-0">
        Stories of Issue 1
      </IssueCount>
      <div className="px-4">
        <StoryCard
          storyTitle="Sea Breeze 2001"
          storyDetail="A culinary Haven by the bay."
          categories={["Restaurants", "Dining"]}
        />
        <StoryCard
          storyTitle="Tandu"
          storyDetail="A stairway to a Filipino Culinary Bliss."
          categories={["Restaurants", "Dining"]}
        />
        <StoryCard
          storyTitle="Dakila' Cafe"
          storyDetail="Where industrial chic meets artistic vibes, coffee and community."
          categories={["Dining", "coffee", "cafes"]}
        />
        <StoryCard
          storyTitle="Her Voice, Her Story"
          storyDetail="Mei’s artistic journey has transformed her into a symbol of substance."
          categories={["independent artists", "music"]}
        />
        <StoryCard
          storyTitle="Ardci Hotel"
          storyDetail="A shining example of excellence in hospitality."
          categories={["Hotels", "hospitality", "Accommodation"]}
        />
      </div>
    </aside>
  );
}
