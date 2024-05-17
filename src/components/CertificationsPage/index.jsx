import HomeContentPage from "../shared/HomeContentPage";
import { CertificationsMain } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";

function CertificationsPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="اخذ مدرک و مجوزها" titleLink="/" />
          {CertificationsMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-20"></div>
          <HeaderTitle title="اخذ مدرک و مجوزها" titleLink="/" />
          <div className="mx-auto my-10">
            {CertificationsMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default CertificationsPage;