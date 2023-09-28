import Link from "next/link";
import Image from "next/image";
export default function StoryCard(props) {
  return (
    <div className={`${props.className}`}>
      <Link href="#" className="group">
        <div
          className="relative overflow-hidden w-full 
          bg-cover bg-center pt-[50%] group mb-2"
        >
          <Image
            className="group-hover:scale-110 transition-transform 
            ease-in-out duration-300 w-full h-full absolute top-0
            left-0 object-cover"
            src={props.imagePath}
            width="400"
            height="400"
            alt="The front side of the Sea Breeze restaurant building"
          />
        </div>
        <h2 className="md:text-[1.75rem] text-[1.45rem] story uppercase">
          {props.storyTitle}
        </h2>
        <p className="font-merriweather text-sm">{props.storyDetail}</p>
        <div
          className="border-black border mt-3
            border-opacity-25 w-[4rem] group-hover:border-vs-red transition-all"
        ></div>
      </Link>
      {props.categories.length > 0 && (
        <div className="flex md:space-x-3 space-x-2 md:my-3 my-2">
          {props.categories.map((cat) => (
            <span className="mb-3 text-[10px] font-bold font-merriweather-sans uppercase">
              {cat}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
