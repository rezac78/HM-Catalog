import HomeContentPage from "../shared/HomeContentPage";
import { loginMain } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import LoginPath from "../Loginpath";
import HeaderScroll from "../shared/HeaderScroll";
function LoginPage({ isScrolled }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
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
      <div className="mb-14">
      <LoginPath />
      </div>
      </div>
    </HeaderScroll>
  );
}

export default LoginPage;
