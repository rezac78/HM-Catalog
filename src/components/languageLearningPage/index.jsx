import {
  languageLearningMain,
  languageLearningMain2,
  languageLearningMainCard,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HomeContentPage from "../shared/HomeContentPage";
import CardMain from "../shared/CardMain";
import HeaderScroll from "../shared/HeaderScroll";

function languageLearningPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="زبان" titleLink="/design" />
          {languageLearningMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          {languageLearningMain2.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="grid grid-cols-2 self-center gap-6 md:flex flex-wrap md:justify-around mb-14">
            {languageLearningMainCard.map((e) => (
              <CardMain
                key={e.id}
                Title={e.Title}
                Image={e.image}
                link={e.link}
                type={false}
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
          <HeaderTitle title="زبان" titleLink="/" />
          <div className="mx-auto my-10">
            {languageLearningMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <div className="mx-auto my-10">
            {languageLearningMain2.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 self-center gap-6 md:flex flex-wrap md:justify-around py-10">
            {languageLearningMainCard.map((e) => (
              <CardMain
                key={e.id}
                Title={e.Title}
                Image={e.image}
                link={e.link}
                type={false}
              />
            ))}
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default languageLearningPage;
