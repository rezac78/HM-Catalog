import { Link } from "react-router-dom";

function CardMain({ Title, Image, link, type }) {
  return (
    <Link
      to={link}
      className={`bg-[#387AB4] rounded-lg ${
        type ? "pt-2 w-28 h-28" : "pt-1 w-[150px] h-[64px] md:w-[270px] md:h-[90px]"
      }`}
    >
      {type && (
        <img
          alt="notfound"
          src={Image}
          className="w-[50px] h-[50px] mx-auto "
        />
      )}
      <span className="flex align-center justify-center text-[#ffff] py-4 md:py-6 text-[14px] md:text-[20px]">
        {Title}
      </span>
    </Link>
  );
}
export default CardMain;