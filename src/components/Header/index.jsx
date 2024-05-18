import React from "react";
import BreadCrumbs from "../shared/BreadCrumbs";
import { Link } from "react-router-dom";

function Header({ type, links }) {
  return (
    <>
    
      <header
        className={`flex flex-col w-full z-30 min-h-[210px]  md:h-[112px] bg-gradient-to-t from-[#1E73BF] to-[#57A2DE] rounded-b-lg md:rounded-none`}
      >
<div className="flex w-full">
        <Link to={'/'} className="pt-4 flex justify-start">
          <img
            src="/images/hat.png"
            alt="Logo"
            className="h-[80px] w-[90px] mr-4"
          />
        </Link>
        <div className="flex justify-start flex-col items-start mt-10 mr-2">
          <span className="text-white font-bold">همراهان</span>
          <span className="text-[#F5F5F5]">فردایی روشن</span>
        </div>
        </div>
        <BreadCrumbs links={links} />
      </header>
      
    </>
  );
}

export default Header;
