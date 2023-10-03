"use client";
import FbIcon from "../Icons/FbIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import CopyIcon from "../Icons/CopyIcon";

import { useEffect, useState } from "react";

export default function ArticleHeader(props) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const copyUrl = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <header className="my-6">
      <h1 className="uppercase leading-[1.2]">{props.title}</h1>
      <p className="font-merriweather md:text-base text-sm">{props.detail}</p>
      <div
        className="flex justify-between md:py-4 py-2.5
        border-b border-black border-opacity-50"
      >
        <div>
          <p
            className="font-merriweather-sans text-black 
            md:text-sm text-xs text-opacity-50"
          >
            <span className="italic">Written by:</span>{" "}
            <span className="font-bold">{props.author}</span>
          </p>
          <p
            className="font-merriweather-sans text-black 
            md:text-sm text-xs text-opacity-50"
          >
            <span className="italic">Edited by:</span>{" "}
            <span className="font-bold">{props.editor}</span>
          </p>
          <p
            className="text-black md:text-sm text-xs 
          text-opacity-50 font-merriweather-sans"
          >
            <span className="italic ">Photos by:</span>{" "}
            <span className="font-bold">{props.photoAuthor}</span>
          </p>
        </div>
        <p className="md:text-sm text-xs text-black text-opacity-50 font-merriweather font-bold">
          {props.date}
        </p>
      </div>
      {props.categories && props.categories.length > 0 && (
        <div className="flex md:space-x-3 space-x-2 md:my-3 my-2">
          {props.categories.map((cat) => (
            <span
              key={cat}
              className="mb-3 text-[10px] font-bold 
              font-merriweather-sans uppercase"
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      <div className="socials md:mb-12 flex md:space-x-12 space-x-8 items-center justify-center">
        <a
          href={`http://facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`}
        >
          <FbIcon className="md:w-auto w-6 md:h-auto h-6" />
        </a>
        <a href={`https://twitter.com/intent/tweet?url=${url}`}>
          <TwitterIcon className="md:w-auto w-6 md:h-auto h-6" />
        </a>
        <button onClick={copyUrl}>
          <CopyIcon className="md:w-auto w-6 md:h-auto h-6" />
        </button>
      </div>
    </header>
  );
}
