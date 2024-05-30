import { baMain, baMainCard } from "../../Event/fakeData";
import CardMain from "../shared/CardMain";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HomeContentPage from "../shared/HomeContentPage";
import HeaderScroll from "../shared/HeaderScroll";

function BAPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="BA" titleLink="/design" />
          {baMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="flex flex-wrap items-center justify-center gap-y-5 gap-x-16 py-10">
            {baMainCard.map((e) => (
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
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle title="BA" titleLink="/design" />
          <div className="mx-auto my-10">
            {baMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-y-5 gap-x-16 py-10">
            {baMainCard.map((e) => (
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

export default BAPage;
