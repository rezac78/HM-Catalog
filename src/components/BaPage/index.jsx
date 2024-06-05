import { baMain, baMainCard } from "../../Event/fakeData";
import CardMain from "../shared/CardMain";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import ImagePart from "../shared/ImagePart";

function BAPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="BA" titleLink="/design" />
          <ImagePart width="100%" imageUrl={"/poster/BA.png"} />
          <ImagePart
            width="100%"
            imageUrl={
              "/poster/تفاوت دوره BA دانشگاه پیام‌نور با موسسات دیگر.png"
            }
          />
          {/* {baMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))} */}
          <div className="grid grid-cols-2 self-center gap-3 sm:gap-6">
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
          <ImagePart
            width="100%"
            imageUrl={
              "/poster/تحصیل در دوره های baبرای چه کسانی مناسب است؟.png"
            }
          />
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle title="BA" titleLink="/design" />
          <ImagePart width="100%" imageUrl={"/poster/BAPoster.png"} />
          <ImagePart
            width="100%"
            imageUrl={
              "/poster/تفاوت-دوره-BA-دانشگاه-پیام‌نور-با-موسسات-دیگر.png"
            }
          />
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
            <ImagePart
              width="100%"
              imageUrl={
                "/poster/تحصیل در دوره های BA برای چه کسانی مناسب است؟.png"
              }
            />
        </div>
      )}
    </HeaderScroll>
  );
}

export default BAPage;
