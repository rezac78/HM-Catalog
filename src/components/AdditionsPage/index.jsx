import { seniorTable, masterTable, PHDTable } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import ListForm from "../shared/ListForm";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";

function AdditionsPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="ارزش های پیشنهادی" titleLink="/" />
          <div className="mb-14">
            <ListForm
              title={seniorTable[0].Title}
              Data={seniorTable[0].linkList}
            />
            <ListForm
              title={masterTable[0].Title}
              Data={masterTable[0].linkList}
            />
            <ListForm title={PHDTable[0].Title} Data={PHDTable[0].linkList} />
          </div>
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle title="ارزش های پیشنهادی" titleLink="/" />
          <div className="max-w-[1300px] m-auto my-10">
            <ListForm
              title={seniorTable[0].Title}
              Data={seniorTable[0].linkList}
            />
            <ListForm
              title={masterTable[0].Title}
              Data={masterTable[0].linkList}
            />
            <ListForm title={PHDTable[0].Title} Data={PHDTable[0].linkList} />
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default AdditionsPage;
