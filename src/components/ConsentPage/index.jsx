import { ConsentMain, consentTable } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HomeContentPage from "../shared/HomeContentPage";
import ListForm from "../shared/ListForm";
function ConsentPage({ isScrolled }) {
  return (
    <div
      className={`absolute md:static top-[300px] left-1/2 -translate-x-1/2 md:translate-x-[unset] flex flex-col w-[95%] md:w-full py-10 md:h-full app-content ${
        isScrolled ? "overflow-y-auto top-[450px]" : ""
      } p-4 md:p-0 max-h-[84vh] z-50 bg-[#FFFFFF] rounded-t-[40px] md:rounded-t-[0]`}
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
