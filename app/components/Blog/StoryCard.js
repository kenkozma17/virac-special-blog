import Link from "next/link";
import Image from "next/image";
import IssueLogo from "./IssueLogo";
export default function StoryCard(props) {
  return (
    <div className={`${props.className}`}>
      <Link href={props.url} className="group">
        <div
          className={`relative overflow-hidden w-full 
          bg-cover bg-center pt-[50%] group mb-2`}
        >
          <Image
            className="group-hover:scale-110 transition-transform 
            ease-in-out duration-300 w-full h-full absolute top-0
            left-0 object-cover"
            src={props.imagePath}
            width="800"
            height="400"
            alt="The front side of the Sea Breeze restaurant building"
          />
          <IssueLogo issueDate="Sept 30, 2023" issue="Issue 9" />
        </div>
        <h2 className="md:text-[3rem] text-[2.25rem] story uppercase">
          {props.storyTitle}
        </h2>
        <p className="font-merriweather text-sm">{props.storyDetail}</p>
        <div
          className="border-black border mt-3
            border-opacity-25 w-[4rem] group-hover:border-vs-red
            transition-all group-hover:w-full duration-500"
        ></div>
      </Link>
      {props.categories && props.categories.length > 0 && (
        <div className="flex md:space-x-3 space-x-2 md:my-3 my-2">
          {props.categories.map((cat) => (
            <span
              key={cat}
              className="mb-3 text-[10px] font-bold font-merriweather-sans uppercase"
            >
              {cat}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
