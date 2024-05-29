import HomeContentPage from "../shared/HomeContentPage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { benefitsTables } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import ListForm from "../shared/ListForm";
function BenefitPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="مزایا" titleLink="/about" />
          <div className="my-6">
            <ListForm
              title={benefitsTables[0].Title}
              Data={benefitsTables[0].linkList}
              type="listNumber"
            />
          </div>
          <div className="my-14 mx-auto">
            <LazyLoadImage
              effect="blur"
              alt="notFound"
              src="/images/chart.svg"
              className="w-full h-full"
            />
          </div>
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-blue-50 w-full flex mx-auto mt-5 mb-14"></div>
          <HeaderTitle title="مزایا" titleLink="/about" />
          <div className="my-6">
            <ListForm
              title={benefitsTables[0].Title}
              Data={benefitsTables[0].linkList}
              type="listNumber"
            />
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default BenefitPage;
