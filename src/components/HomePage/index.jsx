import HomeContentPage from "../shared/HomeContentPage";
import {
  homeMain,
  homeMainCard,
  homeDeskTopMainCard,
} from "../../Event/fakeData";
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
        <div className="hidden md:flex justify-center w-full md:px-10">
          <div className="-mt-[5px]">
            <img alt="notFound" src="/images/homeLogo.svg" />
            <div className="flex w-6/12 my-5">
              <div className="h-24 w-1 ml-3 bg-[#387AB4]"></div>
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
        <div className="hidden md:flex justify-center my-auto p-5 gap-3">
          {homeDeskTopMainCard.map((e, i) => (
            <CardDeskTop
              key={i}
              image={e.image}
              imageBack={e.imageBack}
              link={e.link}
              Title={e.Title}
            />
          ))}
        </div>
        {/* <div>
          <div className="bg-[#387AB4] w-10 h-10"></div>
          <div className="bg-[#387AB4] w-10 h-10"></div>
          <div className="bg-[#387AB4] w-10 h-10"></div>
        </div> */}
      </>
    </HeaderScroll>
  );
}
export default HomePage;
