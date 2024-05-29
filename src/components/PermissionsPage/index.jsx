import HomeContentPage from "../shared/HomeContentPage";
import {
  permissionsMain,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import ImagePart from "../shared/ImagePart";
function PermissionsPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="مجوزها" titleLink="/about" />
          {permissionsMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <ImagePart imageUrl={"/images/backImage.png"} />
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-blue-50 w-full flex mx-auto mt-5 mb-20"></div>
          <HeaderTitle title="مجوزها" titleLink="/about" />
          <div className="mx-auto my-10">
            {permissionsMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <ImagePart imageUrl={"/images/backImage.png"} />
        </div>
      )}
    </HeaderScroll>
  );
}

export default PermissionsPage;
