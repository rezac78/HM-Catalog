import HomeContentPage from "../shared/HomeContentPage";
import { clubMain } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";

function ClubPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="باشگاه همراهی" titleLink="/design" />
          {clubMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle title="باشگاه همراهی" titleLink="/design" />
          <div className="mx-auto my-10">
            {clubMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default ClubPage;
