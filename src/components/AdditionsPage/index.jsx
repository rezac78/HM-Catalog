import { seniorTable, masterTable, PHDTable } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import ListForm from "../shared/ListForm";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";

function AdditionsPage({ isScrolled, isWide }) {
  return (
    <div
      className={`absolute md:static top-[300px] left-1/2 -translate-x-1/2 md:translate-x-[unset] flex flex-col w-[95%] md:w-full py-10 md:h-full app-content ${
        isScrolled ? "overflow-y-auto top-[450px]" : ""
      } p-4 md:p-0 max-h-[84vh] z-50 bg-[#FFFFFF] rounded-t-[40px] md:rounded-t-[0]`}
    >
      {!isWide ? (
        <>
          <HeaderTitle title="ارزش افزوده‌های ما" titleLink="/" />
          <div className="my-6">
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
        <div>
          <div className="flex justify-start">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-20"></div>
          <HeaderTitle title="ارزش افزوده‌های ما" titleLink="/" />
          <div className="my-6">
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
    </div>
  );
}

export default AdditionsPage;
