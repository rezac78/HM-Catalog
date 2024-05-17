import HomeContentPage from "../shared/HomeContentPage";
import { seniorMain, seniorTables } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import ListForm from "../shared/ListForm";
import HeaderScroll from "../shared/HeaderScroll";

function MastersPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="کارشناسی" titleLink="/university" />
          {seniorMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="mb-14">
            <ListForm
              title={seniorTables[0].Title}
              Data={seniorTables[0].linkList}
              type=""
            />
          </div>
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-20"></div>
          <HeaderTitle title="کارشناسی" titleLink="/" />
          <div className="mx-auto my-10">
            {seniorMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <div className="my-6">
            <ListForm
              title={seniorTables[0].Title}
              Data={seniorTables[0].linkList}
              type=""
            />
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default MastersPage;