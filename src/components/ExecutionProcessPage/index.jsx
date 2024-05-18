import { ExecutionProcessTables } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import ListForm from "../shared/ListForm";
import HeaderScroll from "../shared/HeaderScroll";

function ExecutionProcessPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="فرآیند اجرایی (اینفوگرافی)" titleLink="/FastTrackPlan" />
          <div className="my-6">
            <ListForm
              title={ExecutionProcessTables[0].Title}
              Data={ExecutionProcessTables[0].linkList}
              type=""
            />
          </div>
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle title="فرآیند اجرایی (اینفوگرافی)" titleLink="/" />
          <div className="my-6">
            <ListForm
              title={ExecutionProcessTables[0].Title}
              Data={ExecutionProcessTables[0].linkList}
              type=""
            />
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default ExecutionProcessPage;
