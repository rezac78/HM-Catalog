import HomeContentPage from "../shared/HomeContentPage";
import {
  IELTSMain,
  IELTSTables,
  IELTSTables2,
  IELTSTables3,
  IELTSTables4,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import ListForm from "../shared/ListForm";

function IELTSPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="دوره IELTS" titleLink="/languageLearning" />
          {IELTSMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="mb-6">
            <ListForm
              title={IELTSTables[0].Title}
              Data={IELTSTables[0].linkList}
              type=""
            />
          </div>
          <div className="mb-6">
            <ListForm
              title={IELTSTables2[0].Title}
              Data={IELTSTables2[0].linkList}
              type=""
            />
          </div>
          <div className="mb-6">
            <ListForm
              title={IELTSTables3[0].Title}
              Data={IELTSTables3[0].linkList}
              type=""
            />
          </div>
          <div className="mb-6">
            <ListForm
              title={IELTSTables4[0].Title}
              Data={IELTSTables4[0].linkList}
              type="listNumber"
            />
          </div>
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle title="دوره IELTS" titleLink="/languageLearning" />
          <div className="mx-auto my-10">
            {IELTSMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <div className="mb-6">
            <ListForm
              title={IELTSTables[0].Title}
              Data={IELTSTables[0].linkList}
              type=""
            />
          </div>
          <div className="mb-6">
            <ListForm
              title={IELTSTables2[0].Title}
              Data={IELTSTables2[0].linkList}
              type=""
            />
          </div>
          <div className="mb-6">
            <ListForm
              title={IELTSTables3[0].Title}
              Data={IELTSTables3[0].linkList}
              type=""
            />
          </div>
          <div className="mb-6">
            <ListForm
              title={IELTSTables4[0].Title}
              Data={IELTSTables4[0].linkList}
              type="listNumber"
            />
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default IELTSPage;
