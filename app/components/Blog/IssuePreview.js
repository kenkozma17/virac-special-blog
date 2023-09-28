import IssueCount from "./IssueCount";
import IssueLogo from "./IssueLogo";
import ImageOverlay from "./ImageOverlay";
import Link from "next/link";
import Image from "next/image";
export default function IssuePreview(props) {
  return (
    <article
      className={`${props.className} pt-10 
      relative border-t-2 border-black inline-b`}
    >
      <IssueCount className="absolute top-0 left-0">Issue 1</IssueCount>

      <div className="relative">
        <IssueLogo issueDate="Sept 28, 2023" issue="Issue 1" />
        <Image
          src="/images/issues/1/sea-breeze/cover.webp"
          className="w-full"
          width="600"
          height="600"
          alt="A table of food from Sea Breeze including crab, beef, salad and a banana shake."
        />
        <ImageOverlay />
        <Link
          href="#"
          className="font-merriweather-sans font-bold absolute 
          rounded-lg bottom-4 left-4 text-xs bg-white md:px-3 
          md:py-2 uppercase hover:px-4 hover:py-3 transition-all"
        >
          Read Full Issue
        </Link>
      </div>
    </article>
  );
}
