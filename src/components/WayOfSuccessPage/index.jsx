import HomeContentPage from "../shared/HomeContentPage";
import {
  POSTDBAMain,
  POSTDBATables,
  POSTDBATables2,
  POSTDBATables3o,
  POSTDBATables4,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import ListForm from "../shared/ListForm";
import HeaderScroll from "../shared/HeaderScroll";

function BaProfessionalPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="POST DBA" titleLink="/BA" />
          {POSTDBAMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="mb-14">
            <ListForm
              title={POSTDBATables[0].Title}
              Data={POSTDBATables[0].linkList}
              type=""
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={POSTDBATables2[0].Title}
              Data={POSTDBATables2[0].linkList}
              type=""
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={POSTDBATables3o[0].Title}
              Data={POSTDBATables3o[0].linkList}
              type=""
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={POSTDBATables4[0].Title}
              Data={POSTDBATables4[0].linkList}
              type=""
            />
          </div>
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle title="POST DBA" titleLink="/BA" />
          <div className="mx-auto my-10">
            {POSTDBAMain.map((e) => (
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
              title={POSTDBATables[0].Title}
              Data={POSTDBATables[0].linkList}
              type=""
            />
          </div>
          <div className="my-6">
            <ListForm
              title={POSTDBATables2[0].Title}
              Data={POSTDBATables2[0].linkList}
              type=""
            />
          </div>
          <div className="my-6">
            <ListForm
              title={POSTDBATables3o[0].Title}
              Data={POSTDBATables3o[0].linkList}
              type=""
            />
          </div>
          <div className="my-6">
            <ListForm
              title={POSTDBATables4[0].Title}
              Data={POSTDBATables4[0].linkList}
              type=""
            />
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default BaProfessionalPage;
