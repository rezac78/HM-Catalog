import HomeContentPage from "../shared/HomeContentPage";
import { bootcampMain, bootcampTables } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import ListForm from "../shared/ListForm";
import HeaderScroll from "../shared/HeaderScroll";

function BootcampPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="بوت کمپ و اشتغال" titleLink="/" />
          <div className="mb-6">
            <ListForm
              title={bootcampTables[0].Title}
              Data={bootcampTables[0].linkList}
              type=""
            />
          </div>
          <div className="mb-6">
          {bootcampMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
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
          <HeaderTitle title="بوت کمپ و اشتغال" titleLink="/" />
          <div className="my-6">
            <ListForm
              title={bootcampTables[0].Title}
              Data={bootcampTables[0].linkList}
              type=""
            />
          </div>
          <div className="mx-auto my-10">
            {bootcampMain.map((e) => (
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

export default BootcampPage;
