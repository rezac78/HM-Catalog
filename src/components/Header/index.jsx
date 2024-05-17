import React from "react";
import BreadCrumbs from "../shared/BreadCrumbs";

function Header({ type, isScrolled, links }) {
  return (
    <>
      {!isScrolled ? (
        <>
          <header
            className={`fixed md:flex md:static top-0 w-full z-30 h-[350px] md:h-[112px] bg-gradient-to-t from-[#1E73BF] to-[#57A2DE] rounded-b-lg md:rounded-none`}
          >
            <div className="pt-8 md:pt-4 flex justify-center md:justify-start">
              <img
                src="/images/hat.png"
                alt="Logo"
                className="h-[80px] w-[90px] mr-2"
              />
            </div>
            <div className="flex justify-center md:justify-start flex-col items-center md:items-start mt-5 md:mt-10 md:mr-2">
              <span className="text-white font-bold">همراهان</span>
              <span className="text-[#F5F5F5]">فردایی روشن</span>
            </div>
          </header>
          <BreadCrumbs isScrolled={isScrolled} links={links} />
        </>
      ) : (
        <header
          className={`fixed top-0 w-full z-30 h-[290px] bg-gradient-to-t from-[#1E73BF] to-[#57A2DE] rounded-b-lg`}
        >
          <div className="py-2 flex justify-start">
            <img
              src="/images/hat.png"
              alt="Logo"
              className="h-[70px] w-[80px] mr-2"
            />
            <div className="flex justify-center flex-col items-center mt-5">
              <span className="text-white font-bold">همراهان</span>
              <span className="text-[#F5F5F5]">فردایی روشن</span>
            </div>
          </div>
          <BreadCrumbs isScrolled={isScrolled} links={links} />
        </header>
      )}
    </>
  );
}

export default Header;
