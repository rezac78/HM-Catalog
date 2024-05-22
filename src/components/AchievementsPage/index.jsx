import { AchievementsMain, AchievementsButton } from "../../Event/fakeData";
import Button from "../shared/Button";
import HeaderTitle from "../shared/HeaderTitle";
import HomeContentPage from "../shared/HomeContentPage";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";

function AchievementsPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          {isWide && (
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          )}
          <div className="mb-10">
            <HeaderTitle title="دستاوردها" titleLink="/glory" />
          </div>
          {AchievementsMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="pb-40 md:mt-20">
            {AchievementsButton.map((e) => (
              <Button key={e.id} href={e.href} title={e.Title} Image={e.img} />
            ))}
          </div>
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          {isWide && (
            <>
              <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
              <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-10"></div>
            </>
          )}
          <div className="mb-10">
            <HeaderTitle title="دستاوردها" titleLink="/glory" />
          </div>
          {AchievementsMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="pb-40 md:mt-20">
            {AchievementsButton.map((e) => (
              <Button key={e.id} href={e.href} title={e.Title} Image={e.img} />
            ))}
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default AchievementsPage;
