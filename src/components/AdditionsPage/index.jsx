import {
  additionsTable,
  additionsTable2,
  additionsCard,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import ListForm from "../shared/ListForm";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import { Link } from "react-router-dom";

function AdditionsPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="چرا همراهان" titleLink="/" />
          <div className="mb-14">
            <ListForm
              title={additionsTable[0].Title}
              Data={additionsTable[0].linkList}
              type="listNumber"
            />
            <ListForm
              title={additionsTable2[0].Title}
              Data={additionsTable2[0].linkList}
              type="listNumber"
            />
          </div>
          <div className="grid grid-cols-2 self-center gap-6 md:flex flex-wrap md:justify-around mb-14">
            {additionsCard.map((e) => (
              <Link
                to={e.link}
                className={`bg-blue hover:bg-hoverBlue focus:outline-none focus:ring rounded-lg p-3 w-[150px]  md:w-[270px]`}
              >
                <span className="flex align-center text-center justify-center text-whiteColor text-[14px] md:text-[20px]">
                  {e.Title}
                </span>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle title="چرا همراهان" titleLink="/" />
          <div className="max-w-[1300px] m-auto my-10">
            <ListForm
              title={additionsTable[0].Title}
              Data={additionsTable[0].linkList}
              type="listNumber"
            />
            <ListForm
              title={additionsTable2[0].Title}
              Data={additionsTable2[0].linkList}
              type="listNumber"
            />
          </div>
          <div className="grid grid-cols-2 self-center gap-2 md:flex flex-wrap md:justify-center py-10">
            {additionsCard.map((e) => (
              <Link
                to={e.link}
                className={`bg-blue hover:bg-hoverBlue focus:outline-none focus:ring rounded-lg p-3 w-[150px]  md:w-[270px]`}
              >
                <span className="flex align-center text-center justify-center text-whiteColor text-[14px] md:text-[20px]">
                  {e.Title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default AdditionsPage;
