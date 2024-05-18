import { Link } from "react-router-dom";
const BreadCrumbs = ({ links = [], isScrolled }) => {
  return links.length === 0 ? null : (
    <ul
      className={`bg-[#FFFFFF] fixed flex md:static top-[110px] w-full  justify-start text-[#6E6E6E] text-[12px] md:pt-5 pr-3 md:pr-10   md:my-0 z-30`}
    >
      <Link to={'/'}>
        <li className={"h-8 flex items-center justify-center"} key={-1}>
          <svg
            width="17"
            height="17"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.765 2.12963L2.7225 5.27963C2.0475 5.80463 1.5 6.92213 1.5 7.76963V13.3271C1.5 15.0671 2.9175 16.4921 4.6575 16.4921H13.3425C15.0825 16.4921 16.5 15.0671 16.5 13.3346V7.87463C16.5 6.96713 15.8925 5.80463 15.15 5.28713L10.515 2.03963C9.465 1.30463 7.7775 1.34213 6.765 2.12963Z"
              stroke="#6E6E6E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 13.4922V11.2422"
              stroke="#6E6E6E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={"mx-1.5"}>{`>`}</span>
        </li>
      </Link>
      {links.map((e, index) => (
        <Link to={e.link}>
          <li className={"h-8 flex items-center justify-center"} key={index}>
            <span>{e.item}</span>
            {index !== links.length - 1 && (
              <span className={"mx-1.5"}>{`>`}</span>
            )}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default BreadCrumbs;