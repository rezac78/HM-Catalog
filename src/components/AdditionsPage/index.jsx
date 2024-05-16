import { seniorTable, masterTable, PHDTable } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import ListForm from "../shared/ListForm";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";

function AdditionsPage({ isScrolled, isWide }) {
  return (
    <div
      className={`absolute top-[25%] md:top-[20%] left-1/2 -translate-x-1/2 flex flex-col w-[95%] md:w-[80%] app-content ${
        isScrolled ? "overflow-y-auto" : ""
      }  p-4 max-h-[84vh] z-50 bg-[#FFFFFF] rounded-t-[40px]`}
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
