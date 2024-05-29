import HomeContentPage from "../shared/HomeContentPage";
import {
  PartnershipMain,
  PartnershipMain2,
  PartnershipMain3,
  PartnershipTable,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import ListForm from "../shared/ListForm";

function PartnershipPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="مشارکت و همکاری" titleLink="/Participation" />
          {PartnershipMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <HeaderTitle
            title="مزایای طرح مشارکت"
            titleLink="/Participation"
            showIcon={false}
          />
          {PartnershipMain2.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <HeaderTitle
            title="مراحل طرح مشارکت"
            titleLink="/Participation"
            showIcon={false}
          />
          {PartnershipMain3.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <ListForm
            title={PartnershipTable[0].Title}
            Data={PartnershipTable[0].linkList}
            type=""
          />
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-20"></div>
          <HeaderTitle title="مشارکت و همکاری" titleLink="/Participation" />
          <div className="mx-auto my-10">
            {PartnershipMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <HeaderTitle
            title="مزایای طرح مشارکت"
            titleLink="/Participation"
            showIcon={false}
          />
          <div className="mx-auto my-10">
            {PartnershipMain2.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <HeaderTitle
            title="مراحل طرح مشارکت"
            titleLink="/Participation"
            showIcon={false}
          />
          <div className="mx-auto my-10">
            {PartnershipMain3.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <div className="my-5">
            <ListForm
              title={PartnershipTable[0].Title}
              Data={PartnershipTable[0].linkList}
              type=""
            />
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default PartnershipPage;
