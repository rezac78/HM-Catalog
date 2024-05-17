import HomeContentPage from "../shared/HomeContentPage";
import {
  baProfessionalMain,
  baProfessionalTables,
  baProfessionalTables2,
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
          <HeaderTitle title="BA تخصصی" titleLink="/" />
          {baProfessionalMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="my-6">
            <ListForm
              title={baProfessionalTables[0].Title}
              Data={baProfessionalTables[0].linkList}
              type=""
            />
          </div>
          <div className="my-6">
            <ListForm
              title={baProfessionalTables2[0].Title}
              Data={baProfessionalTables2[0].linkList}
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
          <HeaderTitle title="BA تخصصی" titleLink="/" />
          <div className="mx-auto my-10">
            {baProfessionalMain.map((e) => (
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
              title={baProfessionalTables[0].Title}
              Data={baProfessionalTables[0].linkList}
              type=""
            />
          </div>
          <div className="my-6">
            <ListForm
              title={baProfessionalTables2[0].Title}
              Data={baProfessionalTables2[0].linkList}
              type=""
            />
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default BaProfessionalPage;