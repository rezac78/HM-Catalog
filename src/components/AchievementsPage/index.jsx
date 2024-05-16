import { AchievementsMain, AchievementsButton } from "../../Event/fakeData";
import Button from "../shared/Button";
import HeaderTitle from "../shared/HeaderTitle";
import HomeContentPage from "../shared/HomeContentPage";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";

function AchievementsPage({ isScrolled, isWide }) {
  return (
    <div
      className={`absolute top-[25%] md:top-[20%] left-1/2 -translate-x-1/2 flex flex-col w-[95%] md:w-[80%] app-content ${
        isScrolled ? "overflow-y-auto" : ""
      }  p-4 max-h-[84vh] z-50 bg-[#FFFFFF] rounded-t-[40px]`}
    >
      {isWide && (
        <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
      )}
      <div className="my-10">
        <HeaderTitle title="دستاوردها" titleLink="/" />
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
          <Button href={e.href} title={e.Title} Image={e.img} />
        ))}
      </div>
    </div>
  );
}

export default AchievementsPage;
