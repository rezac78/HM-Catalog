import { gloryTable, gloryButton } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import ListForm from "../shared/ListForm";
import Button from "../shared/Button";
function GloryPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      <div className="md:max-w-[1300px] md:mx-auto md:px-10 md:mt-10">
        {isWide && (
          <>
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
            <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-10"></div>
          </>
        )}
        <div className="mb-10 md:my-10">
          <HeaderTitle title="افتخارات" titleLink="/" />
        </div>
        <ListForm
            title={gloryTable[0].Title}
            Data={gloryTable[0].linkList}
            type="listNumber"
          />
        {/* {gloryMain.map((e) => (
          <HomeContentPage
            key={e.id}
            title={e.Title}
            content={e.content}
            type={false}
          />
        ))} */}
        <div className="pb-40 md:mt-20">
          {gloryButton.map((e) => (
            <Button key={e.id} href={e.href} title={e.Title} Image={e.img} />
          ))}
        </div>
      </div>
    </HeaderScroll>
  );
}

export default GloryPage;
