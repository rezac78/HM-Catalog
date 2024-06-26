import { designMain, designMainCard } from "../../Event/fakeData";
import CardMain from "../shared/CardMain";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HomeContentPage from "../shared/HomeContentPage";
import HeaderScroll from "../shared/HeaderScroll";
function DesignPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="محصولات و خدمات" titleLink="/" />
          {designMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="grid grid-cols-2 self-center gap-3 sm:gap-6">
            {designMainCard.map((e) => (
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
          <div className="border-t-2 border-blue-50 w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle title="محصولات و خدمات" titleLink="/" />
          <div className="mx-auto my-10">
            {designMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 self-center gap-2 md:flex flex-wrap md:justify-around py-10">
            {designMainCard.map((e) => (
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

export default DesignPage;
