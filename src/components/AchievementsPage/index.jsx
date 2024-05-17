import { AchievementsMain, AchievementsButton } from "../../Event/fakeData";
import Button from "../shared/Button";
import HeaderTitle from "../shared/HeaderTitle";
import HomeContentPage from "../shared/HomeContentPage";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";

function AchievementsPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
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
    </HeaderScroll>
  );
}

export default AchievementsPage;
