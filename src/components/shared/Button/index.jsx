import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Button({ title, Image, href, type, shortTitle }) {
  return (
    <>
      {type === "card" ? (
        <div className="w-[320px] md:w-10/12 mx-auto my-4 p-4 bg-gradient-to-l from-[#539FDC] to-[#1E73BF] rounded-[1rem] shadow-md flex flex-row items-center">
          <div className="mt-0 ml-4">
            <LazyLoadImage
              className="w-24 h-24 rounded-full"
              src={Image}
              effect="blur"
              alt="Profile"
            />
          </div>
          <div className="flex-1 text-center flex flex-col justify-center items-center">
            <h2 className="text-white text-[14px]">{title}</h2>
            <p className="text-white text-[12px]">{shortTitle}</p>
          </div>
        </div>
      ) : (
        <Link
          to={href}
          className="flex justify-around mx-auto py-5 my-5 bg-gradient-to-l from-[#539FDC] to-[#1E73BF] rounded-md w-[300px] h-[76px]"
        >
          <LazyLoadImage effect="blur" alt="notFound" src={Image} />
          <span className="text-white flex pt-2">{title}</span>
        </Link>
      )}
    </>
  );
}

export default Button;
