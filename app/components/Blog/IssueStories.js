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
      <div className="grid md:grid-cols-6">
        <StoryCard
          className="md:mr-6 md:mb-6 col-span-3"
          storyTitle="Sea Breeze 2001"
          storyDetail="A culinary Haven by the bay."
          categories={["Restaurants", "Dining"]}
          imagePath="/images/issues/1/sea-breeze/cover.webp"
          imagePadding="50"
        />
        <StoryCard
          className="md:ml-6 md:mb-6 col-span-3"
          storyTitle="Her Voice, Her Story"
          storyDetail="Mei’s artistic journey has transformed her into a symbol of substance."
          categories={["independent artists", "music"]}
          imagePath="/images/issues/1/mei/cover.webp"
          imagePadding="50"
        />
        <StoryCard
          className="md:mr-6 md:mb-6 col-span-2"
          storyTitle="Oliver's Riff"
          storyDetail="Its serene atmosphere enhances it's existence."
          categories={["Resorts", "Beach"]}
          imagePath="/images/issues/1/oliver/cover.webp"
          imagePadding="50"
        />
        <StoryCard
          className="md:mx-3 md:mb-6 col-span-2"
          storyTitle="Ardci Hotel"
          storyDetail="A shining example of excellence in hospitality."
          categories={["Hotels", "hospitality", "Accommodation"]}
          imagePath="/images/issues/1/ardci/cover.webp"
          imagePadding="50"
        />
        <StoryCard
          className="md:ml-6 md:mb-6 col-span-2"
          storyTitle="Tandu"
          storyDetail="A stairway to a Filipino Culinary Bliss."
          categories={["Restaurants", "Dining"]}
          imagePath="/images/issues/1/tandu/cover-1.webp"
          imagePadding="50"
        />
        <StoryCard
          className="md:mb-6 col-span-4"
          storyTitle="Dakila' Cafe"
          storyDetail="Where industrial chic meets artistic vibes, coffee and community."
          categories={["Dining", "coffee", "cafes"]}
          imagePath="/images/issues/1/dakila/cover.webp"
          imagePadding="50"
        />
      </div>
    </aside>
  );
}
