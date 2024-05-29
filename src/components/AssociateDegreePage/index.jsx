import {
  associateDegreeMain,
  associateDegreeTable2,
  associateDegreeTable,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import ListForm from "../shared/ListForm";
import HomeContentPage from "../shared/HomeContentPage";
function AssociateDegreePage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle
            title="مزایای انتخاب موسسه همراهان برای تحصیل در مقطع  کاردانی و کارشناسی"
            titleLink="/additions"
          />
          <div className="flex md:hidden">
            {associateDegreeMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={true}
              />
            ))}
          </div>
          <HeaderTitle
            title="مزایای خاص برای شاغلین:"
            titleLink="/additions"
            showIcon={false}
          />
          <ListForm
            title={associateDegreeTable[0].Title}
            Data={associateDegreeTable[0].linkList}
            type=""
          />
          <ListForm
            title={associateDegreeTable2[0].Title}
            Data={associateDegreeTable2[0].linkList}
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
            title="مزایای انتخاب موسسه همراهان برای تحصیل در مقطع  کاردانی و کارشناسی"
            titleLink="/additions"
          />
          <div className="mx-auto my-10">
            {associateDegreeMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <HeaderTitle
            title="مزایای خاص برای شاغلین:"
            titleLink="/additions"
            showIcon={false}
          />
          <div className="my-2">
            <ListForm
              title={associateDegreeTable[0].Title}
              Data={associateDegreeTable[0].linkList}
              type=""
            />
          </div>
          <div className="my-2">
            <ListForm
              title={associateDegreeTable2[0].Title}
              Data={associateDegreeTable2[0].linkList}
              type="listNumber"
            />
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default AssociateDegreePage;
