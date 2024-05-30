import {
  additionsTable,
  additionsTable2,
  additionsCard,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import ListForm from "../shared/ListForm";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import CardMain from "../shared/CardMain";

function AdditionsPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="چرا همراهان" titleLink="/" />
          <div className="mb-14">
            <ListForm
              title={additionsTable[0].Title}
              Data={additionsTable[0].linkList}
              type="listNumber"
            />
            <ListForm
              title={additionsTable2[0].Title}
              Data={additionsTable2[0].linkList}
              type="listNumber"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-y-5 gap-x-16 py-10">
            {additionsCard.map((e) => (
              <CardMain
                key={e.id}
                Title={e.Title}
                Image={e.image}
                link={e.link}
                type={false}
                CrdForPage={"additions"}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-10"></div>
          <HeaderTitle title="چرا همراهان" titleLink="/" />
          <div className="max-w-[1300px] m-auto my-10">
            <ListForm
              title={additionsTable[0].Title}
              Data={additionsTable[0].linkList}
              type="listNumber"
            />
            <ListForm
              title={additionsTable2[0].Title}
              Data={additionsTable2[0].linkList}
              type="listNumber"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-y-5 gap-x-16 py-10">
            {additionsCard.map((e) => (
              <CardMain
                key={e.id}
                Title={e.Title}
                Image={e.image}
                link={e.link}
                type={false}
                CrdForPage={"additions"}
              />
            ))}
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default AdditionsPage;
