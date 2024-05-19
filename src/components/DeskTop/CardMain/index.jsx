import { Link } from "react-router-dom";

function CardDeskTop({ link, image, imageBack, Title }) {
  return (
    <Link to={link} className={`bg-[#1E73BF]  rounded-lg pt-6 w-[150px] h-[140px] flex flex-col items-center`}>
      <div className='relative w-[65px] h-[65px]'>
      <img
        alt="notfound"
        src={imageBack}
        className="w-full h-full z-[0] opacity-30"
      />
      <img alt="notfound" src={image} className="w-full h-full z-[1] -mt-[60px]" />
      </div>
      <span className="flex align-center justify-center text-[#ffff] py-2 text-[14px]">
        {Title}
      </span>
    </Link>
  );
}
export default CardDeskTop;
