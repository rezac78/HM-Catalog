import {
  AssociatePHDMain,
  AssociatePHDTable2,
  AssociatePHDTable,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import ListForm from "../shared/ListForm";
import HomeContentPage from "../shared/HomeContentPage";
function AssociatePHDPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle
            title="مزایای انتخاب موسسه همراهان برای تحصیل در مقطع دکتری"
            titleLink="/additions"
          />
          <div className="flex md:hidden">
            {AssociatePHDMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={true}
              />
            ))}
          </div>
          <ListForm
            title={AssociatePHDTable[0].Title}
            Data={AssociatePHDTable[0].linkList}
            type=""
          />
          <ListForm
            title={AssociatePHDTable2[0].Title}
            Data={AssociatePHDTable2[0].linkList}
            type="listNumber"
          />
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-blue-50 w-full flex mx-auto mt-5 mb-14"></div>
          <HeaderTitle
            title="مزایای انتخاب موسسه همراهان برای تحصیل در مقطع دکتری"
            titleLink="/additions"
          />
          <div className="mx-auto my-10">
            {AssociatePHDMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <div className="my-2">
            <ListForm
              title={AssociatePHDTable[0].Title}
              Data={AssociatePHDTable[0].linkList}
              type=""
            />
          </div>
          <div className="my-2">
            <ListForm
              title={AssociatePHDTable2[0].Title}
              Data={AssociatePHDTable2[0].linkList}
              type="listNumber"
            />
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default AssociatePHDPage;
