import HomeContentPage from "../shared/HomeContentPage";
import {
  seniorMain,
  seniorTables,
  seniorTables2,
  seniorTables3,
  seniorTables4,
  seniorTables5,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import ListForm from "../shared/ListForm";
import HeaderScroll from "../shared/HeaderScroll";

function MastersPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="کاردانی و کارشناسی" titleLink="/university" />
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
              type="listNumber"
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={seniorTables2[0].Title}
              Data={seniorTables2[0].linkList}
              type="listNumber"
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={seniorTables3[0].Title}
              Data={seniorTables3[0].linkList}
              type=""
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={seniorTables4[0].Title}
              Data={seniorTables4[0].linkList}
              type=""
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={seniorTables5[0].Title}
              Data={seniorTables5[0].linkList}
              type=""
            />
          </div>
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-blue-50 w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle title="کاردانی و کارشناسی" titleLink="/university" />
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
              type="listNumber"
            />
          </div>
          <div className="my-6">
            <ListForm
              title={seniorTables2[0].Title}
              Data={seniorTables2[0].linkList}
              type="listNumber"
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={seniorTables3[0].Title}
              Data={seniorTables3[0].linkList}
              type=""
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={seniorTables4[0].Title}
              Data={seniorTables4[0].linkList}
              type=""
            />
          </div>
          <div className="mb-14">
            <ListForm
              title={seniorTables5[0].Title}
              Data={seniorTables5[0].linkList}
              type=""
            />
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default MastersPage;
