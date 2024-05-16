import HomeContentPage from "../shared/HomeContentPage";
import { ConsultationMain, ConsultationMainTable,ConsultationMainTable2 } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import ListForm from "../shared/ListForm";
function CouncilPage({ isScrolled, isWide }) {
  return (
    <div
      className={`absolute md:static top-[300px] left-1/2 -translate-x-1/2 md:translate-x-[unset] flex flex-col w-[95%] md:w-full py-10 md:h-full app-content ${
        isScrolled ? "overflow-y-auto top-[450px]" : ""
      } p-4 md:p-0 max-h-[84vh] z-50 bg-[#FFFFFF] rounded-t-[40px] md:rounded-t-[0]`}
    >
      {!isWide ? (
        <>
          <HeaderTitle title="مشاوره تخصصی" titleLink="/" />
          {ConsultationMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="my-6">
            <ListForm
              title={ConsultationMainTable[0].Title}
              Data={ConsultationMainTable[0].linkList}
              type=""
            />
          </div>
          <div className="my-6">
            <ListForm
              title={ConsultationMainTable2[0].Title}
              Data={ConsultationMainTable2[0].linkList}
              type=""
            />
          </div>
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-20"></div>
          <HeaderTitle title="مشاوره تخصصی" titleLink="/" />
          <div className="mx-auto my-10">
            {ConsultationMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <div className="my-6">
            <ListForm
              title={ConsultationMainTable[0].Title}
              Data={ConsultationMainTable[0].linkList}
              type=""
            />
          </div>
          <div className="my-6">
            <ListForm
              title={ConsultationMainTable2[0].Title}
              Data={ConsultationMainTable2[0].linkList}
              type=""
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CouncilPage;
