import { AssociateSpecialDegreeTable } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import ListForm from "../shared/ListForm";
function AssociateSpecialDegreePage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle
            title="مزایای تحصیل در برنامه ویژه همراهان در مقاطع کارشناسی ارشد و دکتری"
            titleLink="/additions"
          />
          <ListForm
            title={AssociateSpecialDegreeTable[0].Title}
            Data={AssociateSpecialDegreeTable[0].linkList}
            type=""
          />
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-blue-50 w-full flex mx-auto mt-5 mb-14"></div>
          <HeaderTitle
            title="مزایای تحصیل در برنامه ویژه همراهان در مقاطع کارشناسی ارشد و دکتری"
            titleLink="/additions"
          />
          <div className="my-2">
            <ListForm
              title={AssociateSpecialDegreeTable[0].Title}
              Data={AssociateSpecialDegreeTable[0].linkList}
              type=""
            />
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default AssociateSpecialDegreePage;
