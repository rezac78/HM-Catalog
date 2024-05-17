import { ConsentMain, consentTable } from "../../Event/fakeData";
import HeaderScroll from "../shared/HeaderScroll";
import HeaderTitle from "../shared/HeaderTitle";
import HomeContentPage from "../shared/HomeContentPage";
import ListForm from "../shared/ListForm";
function ConsentPage({ isScrolled }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
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
    </HeaderScroll>
  );
}

export default ConsentPage;
