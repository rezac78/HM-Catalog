import React from "react";
import SoundPart from "../SoundPart";
import LinkShare from "../LinkShare";
import { SocialMedia } from "../../../Event/fakeData";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BoaldLine from "../BoaldLine";
function ListForm({ title, Data, type }) {
  return (
    <div
      className={`${
        type === "listNumber" ? "" : "mt-5 border border-blue"
      }  rounded-t-lg`}
    >
      <div
        className={`${
          type === "listNumber" ? "" : "bg-blue py-5 pr-5 rounded-t-lg"
        }`}
      >
        <span
          className={`${
            type === "listNumber"
              ? "text-[14px] md:text-[18px] font-bold text-grayColor"
              : "text-whiteColor"
          }`}
        >
          {title}
        </span>
      </div>
      <div className="flex flex-col justify-center text-right px-2 py-2 w-full">
        <span className="text-[14px] font-bold text-grayColor">
          {type === "File" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 self-center gap-3 ">
              {Data.map((e) => (
                <SoundPart sound={e.sound} />
              ))}
            </div>
          ) : (
            <ul
              className={`${
                type === "listNumber" ? "" : "dotted-list"
              } list-none pl-0`}
            >
              {Data.map((e, index) => (
                <li
                  key={index}
                  className={`relative ${
                    type === "listNumber" ? "pr-0 py-1" : "pr-3 py-2"
                  }`}
                >
                  {type === "listNumber" ? (
                    index + 1 + "_" + e.item
                  ) : e.type === "tags" ? (
                    <BoaldLine matn={e.item} />
                  ) : (
                    e.item
                  )}

                  {e.linkAddress && (
                    <LinkShare
                      linkAddress={e.linkAddress}
                      HrefAddress={e.HrefAddress}
                      title={e.title}
                      type={type}
                    />
                  )}
                </li>
              ))}
            </ul>
          )}
        </span>
      </div>
      {type === "list-icon" && (
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-5 md:py-10 px-5">
          {SocialMedia.map((e) => (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              key={e.id}
              to={e.Link}
            >
              <LazyLoadImage
                effect="blur"
                alt="notfound"
                src={e.img}
                className="w-12 md:w-20 h-12 md:h-20"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
export default ListForm;
