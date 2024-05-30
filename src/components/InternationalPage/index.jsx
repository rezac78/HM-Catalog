import { InternationalTable } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import ListForm from "../shared/ListForm";

function InternationalPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="طرح مشارکت مراکز آموزشی" titleLink="/Participation" />
          <ListForm
            title={InternationalTable[0].Title}
            Data={InternationalTable[0].linkList}
            type=""
          />
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-20"></div>
          <HeaderTitle title="طرح مشارکت مراکز آموزشی" titleLink="/Participation" />
          <div className="my-2">
            <ListForm
              title={InternationalTable[0].Title}
              Data={InternationalTable[0].linkList}
              type=""
            />
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default InternationalPage;
