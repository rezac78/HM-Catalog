import HomeContentPage from "../shared/HomeContentPage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { homeMain, homeMainCard } from "../../Event/fakeData";
import CardMain from "../shared/CardMain";
import CardDeskTop from "../DeskTop/CardMain";
import HeaderScroll from "../shared/HeaderScroll";
function HomePage({ isScrolled }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      <>
        <div className="flex md:hidden">
          {homeMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={true}
            />
          ))}
        </div>
        <div className="grid md:hidden grid-cols-2 self-center gap-3 sm:gap-6 sm:pt-5 ">
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
        <div className="hidden md:flex flex-col items-center justify-center w-full md:px-10 max-w-[1200px] mx-auto">
          <LazyLoadImage
            alt="notFound"
            effect="blur"
            src="/images/homeLogo.svg"
          />
          <div className="flex my-5 w-full justify-center">
            <div className="h-28 w-1 bg-[#387AB4]"></div>
            <div className="flex flex-wrap justify-center w-full md:px-2">
              {homeMain.map((e) => (
                <HomeContentPage
                  key={e.id}
                  title={e.Title}
                  content={e.content}
                  type={true}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center my-auto pl-3 pr-12 py-12 gap-3">
          {homeMainCard.map((e, i) => (
            <CardDeskTop
              key={i}
              image={e.image}
              imageBack={e.imageBack}
              link={e.link}
              Title={e.Title}
            />
          ))}
        </div>
        <div className="hidden md:flex relative py-10">
          <div className="absolute bottom-16 bg-[#828282] w-[100%] h-[2px] rounded-tl-[2.5rem]"></div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-14 bg-white z-10 px-10 text-[#595959] text-[18px] font-bold">
            تجربه بی‌نظیر از خدمات با کیفیت
          </div>
        </div>
        <div className="hidden md:flex relative">
          <div className="absolute bottom-0 bg-[#387AB4] w-[40px] h-[350px] rounded-tl-[2.5rem]"></div>
          <div className="absolute bottom-0 bg-[#387AB4] w-[100%] h-[30px]"></div>
          <div className="bg-[#387AB4] absolute left-0 bottom-0 rounded-tr-[3rem] w-[60px] h-[100px]"></div>
        </div>
      </>
    </HeaderScroll>
  );
}
export default HomePage;
