import HomeContentPage from "../shared/HomeContentPage";
import {
  PhdMain,
  PhdMainTable,
  PhdMainTable2,
  PhdMainTable3,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import ListForm from "../shared/ListForm";
import HeaderScroll from "../shared/HeaderScroll";
function PhdPage({ isWide }) {
  return (
    <HeaderScroll>
      {!isWide ? (
        <>
          <HeaderTitle title="دکتری" titleLink="/university" />
          {PhdMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="mb-14">
            <ListForm
              title={PhdMainTable[0].Title}
              Data={PhdMainTable[0].linkList}
              type="listNumber"
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={PhdMainTable2[0].Title}
              Data={PhdMainTable2[0].linkList}
              type="listNumber"
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={PhdMainTable3[0].Title}
              Data={PhdMainTable3[0].linkList}
              type="listNumber"
            />
          </div>
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle title="دکتری" titleLink="/university" />
          <div className="mx-auto my-10">
            {PhdMain.map((e) => (
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
              title={PhdMainTable[0].Title}
              Data={PhdMainTable[0].linkList}
              type="listNumber"
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={PhdMainTable2[0].Title}
              Data={PhdMainTable2[0].linkList}
              type="listNumber"
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={PhdMainTable3[0].Title}
              Data={PhdMainTable3[0].linkList}
              type="listNumber"
            />
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default PhdPage;
