import HomeContentPage from "../shared/HomeContentPage";
import {
  DoctorateLanguageMain,
  DoctorateLanguageMain2,
  DoctorateLanguageMain3,
  DoctorateLanguageTables,
  DoctorateLanguageMain4,
  DoctorateLanguageMain5,
  DoctorateLanguageMain6,
  DoctorateLanguageTables2,
  DoctorateLanguageTables3,
  DoctorateLanguageTables4,
  DoctorateLanguageTables5,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import ListForm from "../shared/ListForm";

function IDoctorateLanguagePage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle
            title="دوره تخصصی آزمون های زبان جامع دکتری "
            titleLink="/languageLearning"
            showIcon={false}
          />
          {DoctorateLanguageMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <HeaderTitle
            title="ویژگی دوره «زبان جامع دکتری» همراهان"
            titleLink="/languageLearning"
            showIcon={false}
          />
          {DoctorateLanguageMain2.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <HeaderTitle
            title="چرا اخذ مدرک زبان جامع دکتری اهمیت دارد؟"
            titleLink="/languageLearning"
            showIcon={false}
          />
          {DoctorateLanguageMain3.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="mb-10">
            <ListForm
              title={DoctorateLanguageTables[0].Title}
              Data={DoctorateLanguageTables[0].linkList}
              type=""
            />
          </div>
          <HeaderTitle
            title="آزمون‌های معتبر زبان جامع دکتری"
            titleLink="/languageLearning"
            showIcon={false}
          />
          {DoctorateLanguageMain4.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="mb-10">
            <ListForm
              title={DoctorateLanguageTables2[0].Title}
              Data={DoctorateLanguageTables2[0].linkList}
              type="listNumber"
            />
          </div>
          {DoctorateLanguageMain5.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <HeaderTitle
            title="مقایسه هزینه و سختی آزمون های داخلی و خارجی برای اخذ مدرک  :"
            titleLink="/languageLearning"
            showIcon={false}
          />
          <div className="my-10">
            <ListForm
              title={DoctorateLanguageTables3[0].Title}
              Data={DoctorateLanguageTables3[0].linkList}
              type="listNumber"
            />
          </div>
          <div className="my-10">
            <ListForm
              title={DoctorateLanguageTables4[0].Title}
              Data={DoctorateLanguageTables4[0].linkList}
              type=""
            />
          </div>
          <div className="my-10">
            <ListForm
              title={DoctorateLanguageTables5[0].Title}
              Data={DoctorateLanguageTables5[0].linkList}
              type="listNumber"
            />
          </div>
          {DoctorateLanguageMain6.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle
            title="دوره تخصصی آزمون های زبان جامع دکتری"
            titleLink="/languageLearning"
            showIcon={true}
          />
          <div className="mx-auto my-10">
            {DoctorateLanguageMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <HeaderTitle
            title="ویژگی دوره «زبان جامع دکتری» همراهان"
            titleLink="/languageLearning"
            showIcon={false}
          />
          <div className="mx-auto my-10">
            {DoctorateLanguageMain2.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <HeaderTitle
            title="چرا اخذ مدرک زبان جامع دکتری اهمیت دارد؟"
            titleLink="/languageLearning"
            showIcon={false}
          />
          <div className="mx-auto my-10">
            {DoctorateLanguageMain3.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <div className="mb-10">
            <ListForm
              title={DoctorateLanguageTables[0].Title}
              Data={DoctorateLanguageTables[0].linkList}
              type=""
            />
          </div>
          <HeaderTitle
            title="آزمون‌های معتبر زبان جامع دکتری"
            titleLink="/languageLearning"
            showIcon={false}
          />
          <div className="mx-auto my-10">
            {DoctorateLanguageMain4.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <div className="mb-10">
            <ListForm
              title={DoctorateLanguageTables2[0].Title}
              Data={DoctorateLanguageTables2[0].linkList}
              type="listNumber"
            />
          </div>
          <div className="mx-auto my-10">
            {DoctorateLanguageMain5.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <HeaderTitle
            title="مقایسه هزینه و سختی آزمون های داخلی و خارجی برای اخذ مدرک  :"
            titleLink="/languageLearning"
            showIcon={false}
          />
          <div className="my-10">
            <ListForm
              title={DoctorateLanguageTables3[0].Title}
              Data={DoctorateLanguageTables3[0].linkList}
              type="listNumber"
            />
          </div>
          <div className="my-10">
            <ListForm
              title={DoctorateLanguageTables4[0].Title}
              Data={DoctorateLanguageTables4[0].linkList}
              type=""
            />
          </div>
          <div className="my-10">
            <ListForm
              title={DoctorateLanguageTables5[0].Title}
              Data={DoctorateLanguageTables5[0].linkList}
              type="listNumber"
            />
          </div>
          <div className="mx-auto my-10">
            {DoctorateLanguageMain6.map((e) => (
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

export default IDoctorateLanguagePage;
