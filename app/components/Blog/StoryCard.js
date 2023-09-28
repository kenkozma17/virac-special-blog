import Link from "next/link";
export default function StoryCard(props) {
  return (
    <>
      <Link href="#" className="group">
        <h2 className="md:text-[1.75rem] story uppercase">
          {props.storyTitle}
        </h2>
        <p className="font-merriweather text-sm">{props.storyDetail}</p>
        <div
          className="border-black border mt-3
            border-opacity-25 w-[4rem] group-hover:border-vs-red transition-all"
        ></div>
      </Link>
      {props.categories.length > 0 && (
        <div
          className="flex md:space-x-3 md:my-3 
          border-b border-black border-opacity-25"
        >
          {props.categories.map((cat) => (
            <span className="mb-3 text-[10px] font-bold font-merriweather-sans uppercase">
              {cat}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
