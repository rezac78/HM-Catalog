import HomeContentPage from "../shared/HomeContentPage";
import {
  ContactUsMain,
  ContactUsMain2,
  ContactUsTables,
  ContactUsTables2,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import ListForm from "../shared/ListForm";
import LinkShare from "../shared/LinkShare";

function ContactUsPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="ارتباط با ما" titleLink="/" />
          {ContactUsMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          {ContactUsMain2.map((e) => (
            <LinkShare
              key={e.id}
              title={e.title}
              linkAddress={e.linkAddress}
              HrefAddress={e.HrefAddress}
              type={false}
            />
          ))}
          <div className="mb-12">
            <ListForm
              title={ContactUsTables[0].Title}
              Data={ContactUsTables[0].linkList}
              type=""
            />
          </div>
          <div className="mb-12">
            <ListForm
              title={ContactUsTables2[0].Title}
              Data={ContactUsTables2[0].linkList}
              type=""
            />
          </div>
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-[#54A0DC] w-full flex mx-auto mt-5 mb-20"></div>
          <HeaderTitle title="ارتباط با ما" titleLink="/" />
          <div className="mx-auto my-10">
            {ContactUsMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          {ContactUsMain2.map((e) => (
            <LinkShare
              key={e.id}
              title={e.title}
              linkAddress={e.linkAddress}
              HrefAddress={e.HrefAddress}
              type={false}
            />
          ))}
          <div className="my-6">
            <ListForm
              title={ContactUsTables[0].Title}
              Data={ContactUsTables[0].linkList}
              type=""
            />
          </div>
          <div className="my-6">
            <ListForm
              title={ContactUsTables2[0].Title}
              Data={ContactUsTables2[0].linkList}
              type=""
            />
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default ContactUsPage;
