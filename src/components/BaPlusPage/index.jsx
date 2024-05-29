import HomeContentPage from "../shared/HomeContentPage";
import {
  baPlusMain,
  baPlusTables,
  baPlusTables2,
  baPlusTables3,
  baPlusTables4,
  baPlusLink,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import ListForm from "../shared/ListForm";
import HeaderScroll from "../shared/HeaderScroll";
import LinkShare from "../shared/LinkShare";

function BaPlusPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="BBA" titleLink="/BA" />
          {baPlusMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="mb-14">
            <ListForm
              title={baPlusTables[0].Title}
              Data={baPlusTables[0].linkList}
              type=""
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={baPlusTables2[0].Title}
              Data={baPlusTables2[0].linkList}
              type=""
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={baPlusTables3[0].Title}
              Data={baPlusTables3[0].linkList}
              type=""
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={baPlusTables4[0].Title}
              Data={baPlusTables4[0].linkList}
              type=""
            />
          </div>
          {baPlusLink.map((e) => (
            <LinkShare
              key={e.id}
              title={e.title}
              linkAddress={e.linkAddress}
              HrefAddress={e.HrefAddress}
              type=""
            />
          ))}
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle title="BBA" titleLink="/BA" />
          <div className="mx-auto my-10">
            {baPlusMain.map((e) => (
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
              title={baPlusTables[0].Title}
              Data={baPlusTables[0].linkList}
              type=""
            />
          </div>
          <div className="my-6">
            <ListForm
              title={baPlusTables2[0].Title}
              Data={baPlusTables2[0].linkList}
              type=""
            />
          </div>
          <div className="my-6">
            <ListForm
              title={baPlusTables3[0].Title}
              Data={baPlusTables3[0].linkList}
              type=""
            />
          </div>
          <div className="my-6">
            <ListForm
              title={baPlusTables4[0].Title}
              Data={baPlusTables4[0].linkList}
              type=""
            />
          </div>
          <div className="my-6">
          {baPlusLink.map((e) => (
            <LinkShare
              key={e.id}
              title={e.title}
              linkAddress={e.linkAddress}
              HrefAddress={e.HrefAddress}
              type=""
            />
          ))}
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default BaPlusPage;
