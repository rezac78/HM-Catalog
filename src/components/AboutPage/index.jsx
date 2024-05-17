import HomeContentPage from "../shared/HomeContentPage";
import { AboutMain,AboutMainCard } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import CardMain from "../shared/CardMain";

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
          <div className="grid grid-cols-2 self-center gap-6 md:flex flex-wrap md:justify-around pt-5 pb-10">
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
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-20"></div>
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
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default AboutPage;
