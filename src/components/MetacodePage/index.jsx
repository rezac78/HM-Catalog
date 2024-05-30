import {
  metacodeMain2,
  metaTagMainCard,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HomeContentPage from "../shared/HomeContentPage";
import CardMain from "../shared/CardMain";
import HeaderScroll from "../shared/HeaderScroll";

function MetacodePage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="متاکد  (مدرسه تخصصی آنلاین کسب درآمد )" titleLink="/design" />
          {metacodeMain2.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="flex flex-wrap items-center justify-center gap-y-5 gap-x-16 py-10">
            {metaTagMainCard.map((e) => (
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
          <HeaderTitle title="متاکد  (مدرسه تخصصی آنلاین کسب درآمد )" titleLink="/design" />
          <div className="mx-auto my-10">
            {metacodeMain2.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-y-5 gap-x-16 py-10">
            {metaTagMainCard.map((e) => (
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

export default MetacodePage;
