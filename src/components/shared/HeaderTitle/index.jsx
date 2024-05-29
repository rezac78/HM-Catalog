import { Link } from "react-router-dom";

function HeaderTitle({ title, titleLink, showIcon = true }) {
  return (
    <>
      {showIcon && (
        <div className="flex justify-end  mt-2">
          <Link className="flex gap-x-2" to={titleLink}>
            <img alt="notfound" src="/icon/icon.svg" />
            <span>بازگشت</span>
          </Link>
        </div>
      )}
      <div className="flex justify-start gap-x-1 mt-1 md:mt-0">
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
