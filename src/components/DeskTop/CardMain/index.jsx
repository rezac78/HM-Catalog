import { Link } from "react-router-dom";

function CardDeskTop({ link, image, imageBack, Title }) {
  return (
    <Link to={link} className={`bg-[#1E73BF]  rounded-lg pt-6 w-[150px] h-[140px] flex flex-col items-center`}>
      <div className='relative w-[65px] h-[65px]'>
      <img alt="notfound" src={image} className="w-full h-full" />
      </div>
      <span className="flex align-center justify-center text-[#ffff] py-2 text-[14px]">
        {Title}
      </span>
    </Link>
  );
}
export default CardDeskTop;
