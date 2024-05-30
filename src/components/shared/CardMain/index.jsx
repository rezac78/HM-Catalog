import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CardMain({ Title, Image, link, type, CrdForPage }) {
  return (
    <Link
      to={link}
      className={`bg-[#387AB4] hover:bg-[#316A99] active:bg-[#28537A] focus:outline-none focus:ring focus:ring-[#28537A]  rounded-lg ${
        type
          ? "pt-2 w-28 h-28"
          : "pt-1 w-[170px] h-[65px] md:w-[250px] md:h-[80px]"
      }`}
    >
      {type && (
        <div className="flex justify-center">
          <LazyLoadImage
            alt="notfound"
            src={Image}
            className="w-[50px] h-[50px]"
            effect="blur"
          />
        </div>
      )}
      <span className={`flex align-center justify-center text-[#ffff] py-4 md:py-6 ${CrdForPage === "additions" ? "text-[11px] md:text-[16px]" : "text-[14px] md:text-[20px]"} `}>
        {Title}
      </span>
    </Link>
  );
}
export default CardMain;
