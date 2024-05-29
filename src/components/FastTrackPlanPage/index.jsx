import {
  FastTrackPlanMain,
  FastTrackPlanTable,
  FastTrackPlanTable2,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HomeContentPage from "../shared/HomeContentPage";
import HeaderScroll from "../shared/HeaderScroll";
import ListForm from "../shared/ListForm";

function FastTrackPlanPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="طرح شتاب" titleLink="/Participation" />
          {FastTrackPlanMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <HeaderTitle title="فضای همکاری" titleLink="/" showIcon={false} />
          <ListForm
            title={FastTrackPlanTable[0].Title}
            Data={FastTrackPlanTable[0].linkList}
            type=""
          />
          <HeaderTitle title="فرآیند اجرایی" titleLink="/" showIcon={false} />
          <ListForm
            title={FastTrackPlanTable2[0].Title}
            Data={FastTrackPlanTable2[0].linkList}
            type=""
          />
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle title="طرح شتاب" titleLink="/Participation" />
          <div className="mx-auto my-10">
            {FastTrackPlanMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <div className="my-12">
            <HeaderTitle title="فضای همکاری" titleLink="/" showIcon={false} />
          </div>

          <div className="my-5">
            <ListForm
              title={FastTrackPlanTable[0].Title}
              Data={FastTrackPlanTable[0].linkList}
              type=""
            />
          </div>
          <div className="my-12">
            <HeaderTitle title="فرآیند اجرایی" titleLink="/" showIcon={false} />
          </div>
          <div className="my-5">
            <ListForm
              title={FastTrackPlanTable2[0].Title}
              Data={FastTrackPlanTable2[0].linkList}
              type=""
            />
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default FastTrackPlanPage;
