import { gloryMain, gloryButton } from "../../Event/fakeData";
import Button from "../shared/Button";
import HeaderTitle from "../shared/HeaderTitle";
import HomeContentPage from "../shared/HomeContentPage";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
function GloryPage({ isScrolled, isWide }) {
  return (
    <div
      className={`absolute md:static top-[300px] left-1/2 -translate-x-1/2 md:translate-x-[unset] flex flex-col w-[95%] md:w-full py-10 md:h-full app-content ${
        isScrolled ? "overflow-y-auto top-[450px]" : ""
      } p-4 md:p-0 max-h-[84vh] z-50 bg-[#FFFFFF] rounded-t-[40px] md:rounded-t-[0]`}
    >
      {isWide && (
        <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
      )}
      <div className="my-10">
        <HeaderTitle title="افتخارات" titleLink="/" />
      </div>
      {gloryMain.map((e) => (
        <HomeContentPage
          key={e.id}
          title={e.Title}
          content={e.content}
          type={false}
        />
      ))}
      <div className="pb-40 md:mt-20">
        {gloryButton.map((e) => (
          <Button href={e.href} title={e.Title} Image={e.img} />
        ))}
      </div>
    </div>
  );
}

export default GloryPage;
