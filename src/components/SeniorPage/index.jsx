import HomeContentPage from "../shared/HomeContentPage";
import {
  mastersMain,
  mastersTable,
  mastersTable2,
  mastersTable3,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import ListForm from "../shared/ListForm";
import HeaderScroll from "../shared/HeaderScroll";
import ImagePart from "../shared/ImagePart";
function MastersPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="کارشناسی ارشد" titleLink="/university" />
          {mastersMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <HeaderTitle title="مشکلات و موانع تحصیل در مقطع کارشناسی ارشد" titleLink="" showIcon={false} />
          <ImagePart width="100%" imageUrl={"/poster/IMG_20240601_150307_912.jpg"} />
          <div className="mb-14">
            <ListForm
              title={mastersTable[0].Title}
              Data={mastersTable[0].linkList}
              type=""
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={mastersTable2[0].Title}
              Data={mastersTable2[0].linkList}
              type=""
            />
          </div>
          <div className="mb-14">
            <HeaderTitle title="قدم به قدم تا اخذ مدرک کارشناسی ارشد" titleLink="" showIcon={false} />
            <ImagePart width="100%" imageUrl={"/poster/IMG_20240601_150258_991.jpg"} />
            <ListForm
              title={mastersTable3[0].Title}
              Data={mastersTable3[0].linkList}
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
          <HeaderTitle title="کارشناسی ارشد" titleLink="/university" />
          <div className="mx-auto my-10">
            {mastersMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <div className="my-6">
            <HeaderTitle title="مشکلات و موانع تحصیل در مقطع کارشناسی ارشد" titleLink="" showIcon={false} />
            <ImagePart width="100%" imageUrl={"/poster/IMG_20240601_150307_912.jpg"} />
          </div>
          <div className="mb-14">
            <ListForm
              title={mastersTable[0].Title}
              Data={mastersTable[0].linkList}
              type=""
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={mastersTable2[0].Title}
              Data={mastersTable2[0].linkList}
              type=""
            />
          </div>
          <div className="mb-14">
            <HeaderTitle title="قدم به قدم تا اخذ مدرک کارشناسی ارشد" titleLink="" showIcon={false} />
            <ImagePart width="100%" imageUrl={"/poster/IMG_20240601_150258_991.jpg"} />
            <ListForm
              title={mastersTable3[0].Title}
              Data={mastersTable3[0].linkList}
              type=""
            />
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default MastersPage;
