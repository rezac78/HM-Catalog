import HomeContentPage from "../shared/HomeContentPage";
import {
  universityMainCard,
  universityMain,
  universityMain2,
  universityTable,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import CardMain from "../shared/CardMain";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import ListForm from "../shared/ListForm";
import HeaderScroll from "../shared/HeaderScroll";
function UniversityPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="دانشگاهی" titleLink="/design" />
          {universityMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <ListForm
            title={universityTable[0].Title}
            Data={universityTable[0].linkList}
            type=""
          />
          <div className="mx-auto mb-5">
            {universityMain2.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 self-center gap-3 sm:gap-6 md:flex flex-wrap md:justify-around">
            {universityMainCard.map((e) => (
              <CardMain
                key={e.id}
                Title={e.Title}
                Image={e.image}
                link={e.link}
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
          <div className="border-t-2 border-blue-50 w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle title="دانشگاهی" titleLink="/design" />
          <div className="mx-auto my-10">
            {universityMain.map((e) => (
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
              title={universityTable[0].Title}
              Data={universityTable[0].linkList}
              type=""
            />
          </div>
          <div className="mx-auto">
            {universityMain2.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 self-center gap-2 gap-y-5 md:flex flex-wrap md:justify-center py-10">
            {universityMainCard.map((e) => (
              <CardMain
                key={e.id}
                Title={e.Title}
                Image={e.image}
                link={e.link}
                type={false}
              />
            ))}
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default UniversityPage;
