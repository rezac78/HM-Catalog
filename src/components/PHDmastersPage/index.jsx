import HomeContentPage from "../shared/HomeContentPage";
import {
  PHDmastersMain,
  PHDmastersMainTable,
  PHDmastersMainTable2,
  PHDmastersMainTable3,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import ListForm from "../shared/ListForm";
import HeaderScroll from "../shared/HeaderScroll";
function PHDmastersPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="ارشد و دکتری ویژه" titleLink="/university" />
          {PHDmastersMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="mb-14">
            <ListForm
              title={PHDmastersMainTable[0].Title}
              Data={PHDmastersMainTable[0].linkList}
              type=""
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={PHDmastersMainTable2[0].Title}
              Data={PHDmastersMainTable2[0].linkList}
              type=""
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={PHDmastersMainTable3[0].Title}
              Data={PHDmastersMainTable3[0].linkList}
              type=""
            />
          </div>
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle title="ارشد و دکتری ویژه" titleLink="/university" />
          <div className="mx-auto my-10">
            {PHDmastersMain.map((e) => (
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
              title={PHDmastersMainTable[0].Title}
              Data={PHDmastersMainTable[0].linkList}
              type=""
            />
          </div>
          <div className="my-6">
            <ListForm
              title={PHDmastersMainTable2[0].Title}
              Data={PHDmastersMainTable2[0].linkList}
              type=""
            />
          </div>
          <div className="my-6">
            <ListForm
              title={PHDmastersMainTable3[0].Title}
              Data={PHDmastersMainTable3[0].linkList}
              type=""
            />
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default PHDmastersPage;
