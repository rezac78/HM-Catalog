import React from "react";
import BreadCrumbs from "../shared/BreadCrumbs";

function Header({ type, links }) {
  return (
    <>
      <header
        className={`fixed flex md:static top-0 w-full z-30 h-[240px] md:h-[112px] bg-gradient-to-t from-[#1E73BF] to-[#57A2DE] rounded-b-lg md:rounded-none`}
      >
        <div className="pt-4 flex justify-start">
          <img
            src="/images/hat.png"
            alt="Logo"
            className="h-[80px] w-[90px] mr-4"
          />
        </div>
        <div className="flex justify-start flex-col items-start mt-10 mr-2">
          <span className="text-white font-bold">همراهان</span>
          <span className="text-[#F5F5F5]">فردایی روشن</span>
        </div>
      </header>
      <BreadCrumbs links={links} />
    </>
  );
}

export default Header;
