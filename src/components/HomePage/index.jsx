import HomeContentPage from "../shared/HomeContentPage";
import {
  homeMain,
  homeMainCard,
  homeDeskTopMainCard,
} from "../../Event/fakeData";
import CardMain from "../shared/CardMain";
import CardDeskTop from "../DeskTop/CardMain";
import HeaderTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
function HomePage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          {homeMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={true}
            />
          ))}
          <div className="grid grid-cols-2 self-center gap-3 sm:gap-6 md:flex flex-wrap md:justify-around sm:pt-5 ">
            {homeMainCard.map((e) => (
              <CardMain
                key={e.id}
                Title={e.Title}
                Image={e.image}
                link={e.link}
                type={true}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="max-w-[1300px] flex justify-center mt-10">
            <HeaderTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="flex justify-between mt-10 w-full border-t-2 border-[#54A0DC]">
            <div className="flex mr-10">
              {homeMain.map((e) => (
                <HomeContentPage
                  key={e.id}
                  title={e.Title}
                  content={e.content}
                  type={true}
                />
              ))}
            </div>
            <div className="relative">
              <img alt="notFound" src="/images/backgroundMain.svg" />
              <img
                className="absolute md:top-10 md:left-20 lg:left-40 lg:top-20 w-[50%] h-[50%]"
                alt="notFound"
                src="/images/mainImage.svg"
              />
            </div>
          </div>
          <div className="grid grid-cols-7 self-center gap-3 mt-10 bg-[#1E73BF] rounded-md py-6">
            {homeDeskTopMainCard.map((e) => (
              <CardDeskTop image={e.image} imageBack={e.imageBack} link={e.link} Title={e.Title} />
            ))}
          </div>
        </>
      )}
    </HeaderScroll>
  );
}

export default HomePage;
