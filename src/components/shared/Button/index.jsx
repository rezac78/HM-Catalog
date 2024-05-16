import { Link } from "react-router-dom";

function Button({ title, Image, href, type, shortTitle }) {
  return (
    <>
      {type === "card" ? (
        <div className="flex mx-auto my-10 bg-gradient-to-l from-[#539FDC] to-[#1E73BF] rounded-[1rem] w-[300px] h-[76px]">
          <img alt="notFound" className="flex justify-end pl-2" src={Image} />
          <div className="">
            <span className="text-white flex text-[14px] pt-2">{title}</span>
            <span className="text-white flex justify-end text-[12px] py-4">
              {shortTitle}
            </span>
          </div>
        </div>
      ) : (
        <Link
          to={href}
          className="flex justify-around mx-auto py-5 my-5 bg-gradient-to-l from-[#539FDC] to-[#1E73BF] rounded-md w-[300px] h-[76px]"
        >
          <img alt="notFound" src={Image} />
          <span className="text-white flex pt-2">{title}</span>
        </Link>
      )}
    </>
  );
}

export default Button;
