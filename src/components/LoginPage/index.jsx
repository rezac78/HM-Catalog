import HomeContentPage from "../shared/HomeContentPage";
import { loginMain } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import LoginPath from "../Loginpath";
function LoginPage({ isScrolled }) {
  return (
    <div
      className={`absolute md:static top-[25%] left-1/2 -translate-x-1/2 md:translate-x-[unset] flex flex-col w-[95%] md:w-full py-10 md:h-full app-content ${
        isScrolled ? "overflow-y-auto" : ""
      }  p-4 md:p-0 max-h-[84vh] z-50 bg-[#FFFFFF] rounded-t-[40px] md:rounded-t-[0]`}
    >
      <div className="md:px-20 md:mt-20">
      <HeaderTitle title="مسیر ثبت نام" titleLink="/design" />
      {loginMain.map((e) => (
        <HomeContentPage
          key={e.id}
          title={e.Title}
          content={e.content}
          type={false}
        />
      ))}
      <LoginPath />
      </div>
    </div>
  );
}

export default LoginPage;
