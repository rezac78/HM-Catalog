import { Link } from "react-router-dom";

function HeaderTitle({ title, titleLink }) {
  return (
    <>
      <Link to={titleLink} className="flex md:hidden justify-end gap-x-2">
        <img alt="notfound" src="/icon/icon.svg" />
        <span>بازگشت</span>
      </Link>
      <div className="flex justify-start gap-x-2 mt-5 md:mt-0">
        <div className="relative">
          <img
            className="-mt-[1.5px]"
            alt="notfound"
            src="/icon/Polygon-1.svg"
          />
          <img
            className="absolute top-1 left-[10px]"
            alt="notfound"
            src="/icon/Polygon-2.svg"
          />
        </div>
        <span className="font-bold mr-3 mt-1">{title}</span>
      </div>
    </>
  );
}

export default HeaderTitle;
