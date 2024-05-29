import HomeContentPage from "../shared/HomeContentPage";
import {
  CollaborateMain,
  CollaborateMain2,
  CollaborateTable,
  CollaborateTable2,
  CollaborateTable3,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import ListForm from "../shared/ListForm";
import HeaderScroll from "../shared/HeaderScroll";
function CollaboratePage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="طرح معرفی و همکاری" titleLink="/Participation" />
          {CollaborateMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <HeaderTitle
            title="استخدام و همکاری"
            titleLink="/"
            showIcon={false}
          />
          {CollaborateMain2.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          {/* <HeaderTitle
            title="استخدام در همراهان"
            titleLink="/"
            showIcon={false}
          />
          {CollaborateMain3.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))} */}
          <ListForm
            title={CollaborateTable[0].Title}
            Data={CollaborateTable[0].linkList}
            type=""
          />
          <ListForm
            title={CollaborateTable2[0].Title}
            Data={CollaborateTable2[0].linkList}
            type=""
          />
           <ListForm
            title={CollaborateTable3[0].Title}
            Data={CollaborateTable3[0].linkList}
            type=""
          />
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-blue-50 w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle title="طرح معرفی و همکاری" titleLink="/Participation" />
          <div className="mx-auto my-10">
            {CollaborateMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <HeaderTitle
            title="استخدام و همکاری"
            titleLink="/"
            showIcon={false}
          />
          <div className="mx-auto my-10">
            {CollaborateMain2.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <div className="my-2">
            <ListForm
              title={CollaborateTable[0].Title}
              Data={CollaborateTable[0].linkList}
              type=""
            />
          </div>
          <div className="my-2">
            <ListForm
              title={CollaborateTable2[0].Title}
              Data={CollaborateTable2[0].linkList}
              type=""
            />
          </div>
          <div className="my-2">
            <ListForm
              title={CollaborateTable3[0].Title}
              Data={CollaborateTable3[0].linkList}
              type=""
            />
          </div>
          {/* <HeaderTitle
            title="استخدام در همراهان"
            titleLink="/"
            showIcon={false}
          />
          <div className="mx-auto my-10">
            {CollaborateMain3.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div> */}
        </div>
      )}
    </HeaderScroll>
  );
}

export default CollaboratePage;
