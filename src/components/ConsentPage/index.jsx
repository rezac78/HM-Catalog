import { ConsentMain, consentTable } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HomeContentPage from "../shared/HomeContentPage";
import ListForm from "../shared/ListForm";
function ConsentPage({ isScrolled }) {
  return (
    <div
      className={`absolute top-[25%] left-1/2 -translate-x-1/2 flex flex-col w-[95%] app-content ${
        isScrolled ? "overflow-y-auto" : ""
      }  p-4 max-h-[84vh] z-50 bg-[#FFFFFF] rounded-t-[40px]`}
    >
      <HeaderTitle title="رضایت مندی" titleLink="/" />
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
          <ListForm
            title={e.Title}
            Data={e.file}
            type="File"
          />
        ))}
      </div>
    </div>
  );
}

export default ConsentPage;
