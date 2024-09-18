import HomeContentPage from "../shared/HomeContentPage";
import {
  IncomeGenerationMain,
  IncomeGenerationMain2,
  IncomeGenerationMain3,
  IncomeGenerationTable,
  IncomeGenerationTable2,
  IncomeGenerationTable3,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import ListForm from "../shared/ListForm";

function IncomeGenerationPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle
            title="طرح  کسب درآمد"
            titleLink="/"
          />
          {IncomeGenerationMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <ListForm
            title={IncomeGenerationTable[0].Title}
            Data={IncomeGenerationTable[0].linkList}
            type="listNumber"
          />
          <div className="my-5">
            <HeaderTitle
              title="اشخاص حقیقی"
              titleLink="/languageLearning"
              showIcon={false}
            />
          </div>
          <div className="mx-auto my-5">
            {IncomeGenerationMain2.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <ListForm
            title={IncomeGenerationTable2[0].Title}
            Data={IncomeGenerationTable2[0].linkList}
            type="listNumber"
          />
          <div className="my-5">
            <HeaderTitle
              title="اشخاص حقیقی"
              titleLink="/"
              showIcon={false}
            />
          </div>
          <div className="mx-auto my-5">
            {IncomeGenerationMain3.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <ListForm
            title={IncomeGenerationTable3[0].Title}
            Data={IncomeGenerationTable3[0].linkList}
            type="listNumber"
          />
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle
            title="طرح  کسب درآمد"
            titleLink="/"
          />
          <div className="mx-auto my-10">
            {IncomeGenerationMain.map((e) => (
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
              title={IncomeGenerationTable[0].Title}
              Data={IncomeGenerationTable[0].linkList}
              type="listNumber"
            />
          </div>
          <div className="my-5">
            <HeaderTitle
              title="اشخاص حقوقی"
              titleLink="/"
              showIcon={false}
            />
          </div>
          <div className="mx-auto my-5">
            {IncomeGenerationMain2.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <ListForm
            title={IncomeGenerationTable2[0].Title}
            Data={IncomeGenerationTable2[0].linkList}
            type="listNumber"
          />
          <div className="my-5">
            <HeaderTitle
              title="اشخاص حقوقی"
              titleLink="/"
              showIcon={false}
            />
          </div>
          <div className="mx-auto my-5">
            {IncomeGenerationMain3.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <ListForm
            title={IncomeGenerationTable3[0].Title}
            Data={IncomeGenerationTable3[0].linkList}
            type="listNumber"
          />
        </div>
      )}
    </HeaderScroll>
  );
}

export default IncomeGenerationPage;
