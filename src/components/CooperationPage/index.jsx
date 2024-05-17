import HomeContentPage from "../shared/HomeContentPage";
import {
  CooperationMain,
  CooperationTables,
  CooperationMain2
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import ListForm from "../shared/ListForm";
function CooperationPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="همکاری­ها و سوابق" titleLink="/about" />
          {CooperationMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="my-6">
            <ListForm
              title={CooperationTables[0].Title}
              Data={CooperationTables[0].linkList}
              type="listNumber"
            />
          </div>
          <div className="mb-10">
            {CooperationMain2.map((e) => (
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
          <HeaderTitle title="همکاری­ها و سوابق" titleLink="/about" />
          <div className="mx-auto my-10">
            {CooperationMain.map((e) => (
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
              title={CooperationTables[0].Title}
              Data={CooperationTables[0].linkList}
              type="listNumber"
            />
          </div>
          <div className="mb-10">
            {CooperationMain2.map((e) => (
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

export default CooperationPage;
