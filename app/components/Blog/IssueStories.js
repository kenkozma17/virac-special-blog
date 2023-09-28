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
      <div className="grid md:grid-cols-2">
        <StoryCard
          className="md:mr-6 md:mb-6"
          storyTitle="Sea Breeze 2001"
          storyDetail="A culinary Haven by the bay."
          categories={["Restaurants", "Dining"]}
          imagePath="/images/issues/1/sea-breeze/cover.webp"
        />
        <StoryCard
          className="md:ml-6 md:mb-6"
          storyTitle="Her Voice, Her Story"
          storyDetail="Mei’s artistic journey has transformed her into a symbol of substance."
          categories={["independent artists", "music"]}
          imagePath="/images/issues/1/mei/cover.webp"
        />
      </div>
      <div className="grid md:grid-cols-3">
        <StoryCard
          className="md:mr-6 md:mb-6"
          storyTitle="Ardci Hotel"
          storyDetail="A shining example of excellence in hospitality."
          categories={["Hotels", "hospitality", "Accommodation"]}
          imagePath="/images/issues/1/ardci/cover.webp"
        />
        <StoryCard
          className="md:mx-3 md:mb-6"
          storyTitle="Tandu"
          storyDetail="A stairway to a Filipino Culinary Bliss."
          categories={["Restaurants", "Dining"]}
          imagePath="/images/issues/1/tandu/cover-1.webp"
        />
        <StoryCard
          className="md:ml-6 md:mb-6"
          storyTitle="Dakila' Cafe"
          storyDetail="Where industrial chic meets artistic vibes, coffee and community."
          categories={["Dining", "coffee", "cafes"]}
          imagePath="/images/issues/1/tandu/img-1.webp"
        />
      </div>
    </aside>
  );
}
