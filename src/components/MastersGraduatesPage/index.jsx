import {
  MastersGraduatesMain,
  MastersGraduatesMainTitle,
  MastersGraduatesMainTitle2,
  MastersGraduatesButton,
  MastersGraduatesButton2,
  MastersGraduatesButton3,
  MastersGraduatesMainTitle3,
} from "../../Event/fakeData";
import Button from "../shared/Button";
import HeaderTitle from "../shared/HeaderTitle";
import HomeContentPage from "../shared/HomeContentPage";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
function MastersGraduatesPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          {isWide && (
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          )}
          <div className="mb-5">
            <HeaderTitle title="فارغ­التحصیلان" titleLink="/achievements" />
          </div>
          {MastersGraduatesMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          {MastersGraduatesMainTitle.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="mb-5 md:mt-20">
            {MastersGraduatesButton.map((e) => (
              <Button
                key={e.id}
                type="card"
                shortTitle={e.shortTitle}
                href={e.href}
                title={e.Title}
                Image={e.img}
              />
            ))}
          </div>
          {/* {MastersGraduatesMainTitle2.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))} */}
          {/* <div className="mb-5 md:mt-20">
            {MastersGraduatesButton.map((e) => (
              <Button
                key={e.id}
                type="card"
                shortTitle={e.shortTitle}
                href={e.href}
                title={e.Title}
                Image={e.img}
              />
            ))}
          </div> */}
          {/* {MastersGraduatesMainTitle3.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="mb-5 md:mt-20">
            {MastersGraduatesButton.map((e) => (
              <Button
                key={e.id}
                type="card"
                shortTitle={e.shortTitle}
                href={e.href}
                title={e.Title}
                Image={e.img}
              />
            ))}
          </div> */}
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          {isWide && (
            <>
              <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
              <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-10"></div>
            </>
          )}
          <div className="my-10">
            <HeaderTitle title="فارغ­التحصیلان" titleLink="/achievements" />
          </div>
          {MastersGraduatesMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          {MastersGraduatesMainTitle.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="grid grid-cols-2 my-10 ">
            {MastersGraduatesButton.map((e) => (
              <Button
                key={e.id}
                type="card"
                shortTitle={e.shortTitle}
                href={e.href}
                title={e.Title}
                Image={e.img}
              />
            ))}
          </div>
          {/* {MastersGraduatesMainTitle2.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <div className="grid grid-cols-2 my-10">
            {MastersGraduatesButton2.map((e) => (
              <Button
                key={e.id}
                type="card"
                shortTitle={e.shortTitle}
                href={e.href}
                title={e.Title}
                Image={e.img}
              />
            ))}
          </div>
          {MastersGraduatesMainTitle3.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))} */}
          {/* <div className="grid grid-cols-2 my-10">
            {MastersGraduatesButton3.map((e) => (
              <Button
                key={e.id}
                type="card"
                shortTitle={e.shortTitle}
                href={e.href}
                title={e.Title}
                Image={e.img}
              />
            ))}
          </div> */}
        </div>
      )}
    </HeaderScroll>
  );
}

export default MastersGraduatesPage;
