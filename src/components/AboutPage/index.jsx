import HomeContentPage from "../shared/HomeContentPage";
import { AboutMain, AboutMainCard } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import CardMain from "../shared/CardMain";
import BoaldLine from "../shared/BoaldLine";

function AboutPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="درباره ما" titleLink="/" />
          {AboutMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <BoaldLine matn="مفتخریم بگوییم که تا به امروز بیش از 9 هزار نفر موسسه‌ «همراهان فردای روشن»  را برای ادامه‌ مسیر تحصیلی خود انتخاب نموده ‌اند." />
          <div className="flex flex-wrap items-center justify-center gap-y-5 gap-x-16 py-10">
            {AboutMainCard.map((e) => (
              <CardMain
                key={e.id}
                Title={e.Title}
                Image={e.image}
                link={e.link}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-5">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-blue-50 w-full flex mx-auto mt-5 mb-14"></div>
          <HeaderTitle title="درباره ما" titleLink="/" />
          <div className="mx-auto my-10">
            {AboutMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
            <BoaldLine matn="مفتخریم بگوییم که تا به امروز بیش از 9 هزار نفر موسسه‌ «همراهان فردای روشن»  را برای ادامه‌ مسیر تحصیلی خود انتخاب نموده ‌اند." />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-y-5 gap-x-16 py-10">
            {AboutMainCard.map((e) => (
              <CardMain
                key={e.id}
                Title={e.Title}
                Image={e.image}
                link={e.link}
              />
            ))}
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default AboutPage;
