import React from "react";
import SoundPart from "../SoundPart";

function ListForm({ title, Data, type }) {
  return (
    <div
      className={`${
        type === "listNumber" ? "" : "mt-10 border border-[#387AB4]"
      }  rounded-t-lg`}
    >
      <div
        className={`${
          type === "listNumber" ? "" : "bg-[#387AB4] py-5 pr-5 rounded-t-lg"
        }`}
      >
        <span className={`${type === "listNumber" ? "text-[14px] md:text-[18px] font-bold text-[#4F4F4F]" : "text-[#ffff]"}`}>{title}</span>
      </div>
      <div className="flex flex-col justify-center text-right p-4 w-full">
        <span className="text-[14px] font-bold text-[#4F4F4F]">
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
                <li className={`relative ${type === "listNumber" ? "pr-0 py-1" :"pr-3 py-3"}`}>
                  {type === "listNumber" ? index + 1 + "_" + e.item : e.item}
                </li>
              ))}
            </ul>
          )}
        </span>
      </div>
    </div>
  );
}
export default ListForm;
