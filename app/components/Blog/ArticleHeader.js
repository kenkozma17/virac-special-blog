import FbIcon from "../Icons/FbIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import CopyIcon from "../Icons/CopyIcon";

import { Metadata } from "next";

export const metadata = {
  title: `Virac Special`,
  description: "...",
};
export default function ArticleHeader(props) {
  return (
    <header className="my-6">
      <h1 className="uppercase leading-[1.2]">{props.title}</h1>
      <p className="font-merriweather md:text-base text-sm">{props.detail}</p>
      <div
        className="flex justify-between md:py-4 py-2.5
        border-b border-black border-opacity-50"
      >
        <div>
          <p className="text-black md:text-sm text-xs text-opacity-50">
            <span className="italic ">Written by:</span>{" "}
            <span className="font-bold font-merriweather-sans">
              {props.author}
            </span>
          </p>
          <p className="text-black md:text-sm text-xs text-opacity-50">
            <span className="italic ">Photos by:</span>{" "}
            <span className="font-bold font-merriweather-sans">
              {props.photoAuthor}
            </span>
          </p>
        </div>
        <p className="md:text-sm text-xs text-black text-opacity-50 font-merriweather font-bold">
          {props.date}
        </p>
      </div>
      {props.categories && props.categories.length > 0 && (
        <div className="flex md:space-x-3 space-x-2 md:my-3 my-2">
          {props.categories.map((cat) => (
            <span className="mb-3 text-[10px] font-bold font-merriweather-sans uppercase">
              {cat}
            </span>
          ))}
        </div>
      )}

      <div className="socials md:mb-12 flex md:space-x-12 space-x-8 items-center justify-center">
        <FbIcon className="md:w-auto w-6 md:h-auto h-6" />
        <TwitterIcon className="md:w-auto w-6 md:h-auto h-6" />
        <CopyIcon className="md:w-auto w-6 md:h-auto h-6" />
      </div>
    </header>
  );
}
