import IssueCount from "./IssueCount";
import IssueLogo from "./IssueLogo";
import ImageOverlay from "./ImageOverlay";
import Link from "next/link";
import Image from "next/image";
export default function IssuePreview(props) {
  return (
    <section
      className={`${props.className} md:pt-14 pt-10 
      relative border-t-2 border-black inline-b`}
    >
      <IssueCount className="absolute top-0 left-0">Issue 9</IssueCount>

      <div className="relative">
        <IssueLogo issueDate="Sept 28, 2023" issue="Issue 9" />
        <div
          className="relative overflow-hidden w-full 
          bg-cover bg-center pt-[40%]"
        >
          <Image
            src="/images/issues/1/cover.webp"
            className="w-full h-full absolute top-0 left-0 object-cover"
            width="1000"
            height="1000"
            alt="A table of food from Sea Breeze including crab, beef, salad and a banana shake."
          />
        </div>
        <ImageOverlay />
        <Link
          href="#"
          className="font-merriweather-sans font-bold absolute 
          rounded-lg bottom-4 left-4 text-xs bg-white px-3  
          py-2 uppercase hover:px-4 hover:py-3 transition-all"
        >
          Full Issue Coming Soon
        </Link>
      </div>
    </section>
  );
}
