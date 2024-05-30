import { ConsentMain, consentTable } from "../../Event/fakeData";
import HeaderScroll from "../shared/HeaderScroll";
import HeaderTitle from "../shared/HeaderTitle";
import HomeContentPage from "../shared/HomeContentPage";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import ListForm from "../shared/ListForm";
function ConsentPage() {
  return (
    <HeaderScroll>
      <div className="max-w-[1300px] mx-auto px-2 md:px-20">
        <div className="flex justify-start mt-10">
          <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
        </div>
        <div className="border-t-2 border-blue-50 w-full flex mx-auto mt-5 mb-10"></div>
        <HeaderTitle title="رضایت مندی" titleLink="/design" />
        {ConsentMain.map((e) => (
          <HomeContentPage
            key={e.id}
            title={e.Title}
            content={e.content}
            type={false}
          />
        ))}
        <div className="my-6">
          {consentTable.map((e) => (
            <ListForm title={e.Title} Data={e.file} type="File" />
          ))}
        </div>
      </div>
    </HeaderScroll>
  );
}

export default ConsentPage;
