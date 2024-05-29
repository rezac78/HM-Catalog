import HomeContentPage from "../shared/HomeContentPage";
import {
  bootcampMain,
  bootcampTables,
  bootcampTables2,
  bootcampTables3,
  bootcampTables4,
  bootcampTables5,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import ListForm from "../shared/ListForm";
import HeaderScroll from "../shared/HeaderScroll";

function BootcampPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="بوت کمپ و کار" titleLink="/metacode" />
          <div className="mb-6">
            <ListForm
              title={bootcampTables[0].Title}
              Data={bootcampTables[0].linkList}
              type=""
            />
          </div>
          <div className="mb-6">
            <ListForm
              title={bootcampTables2[0].Title}
              Data={bootcampTables2[0].linkList}
              type=""
            />
          </div>
          <div className="mb-6">
            <ListForm
              title={bootcampTables3[0].Title}
              Data={bootcampTables3[0].linkList}
              type=""
            />
          </div>
          <div className="mb-6">
            <ListForm
              title={bootcampTables4[0].Title}
              Data={bootcampTables4[0].linkList}
              type=""
            />
          </div>
          <div className="mb-6">
            <ListForm
              title={bootcampTables5[0].Title}
              Data={bootcampTables5[0].linkList}
              type="listNumber"
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
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle title="بوت کمپ و کار" titleLink="/metacode" />
          <div className="mb-6">
            <ListForm
              title={bootcampTables[0].Title}
              Data={bootcampTables[0].linkList}
              type=""
            />
          </div>
          <div className="mb-6">
            <ListForm
              title={bootcampTables2[0].Title}
              Data={bootcampTables2[0].linkList}
              type=""
            />
          </div>
          <div className="mb-6">
            <ListForm
              title={bootcampTables3[0].Title}
              Data={bootcampTables3[0].linkList}
              type=""
            />
          </div>
          <div className="mb-6">
            <ListForm
              title={bootcampTables4[0].Title}
              Data={bootcampTables4[0].linkList}
              type=""
            />
          </div>
          <div className="mb-6">
            <ListForm
              title={bootcampTables5[0].Title}
              Data={bootcampTables5[0].linkList}
              type="listNumber"
            />
          </div>
          <div className="mx-auto my-5">
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
