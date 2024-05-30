import {
  ContactUsTables,
  ContactUsTables2,
  ContactUsTables3,
  ContactUsTables4,
} from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import ListForm from "../shared/ListForm";

function ContactUsPage({ isScrolled, isWide }) {
  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="ارتباط با ما" titleLink="/" />
          <div className="mb-12">
            <ListForm
              title={ContactUsTables3[0].Title}
              Data={ContactUsTables3[0].linkList}
              type="listLink"
            />
          </div>
          <div className="mb-12">
            <ListForm
              title={ContactUsTables4[0].Title}
              Data={ContactUsTables4[0].linkList}
              type="listLink"
            />
          </div>
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
              type="list-icon"
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
          <div className="my-6">
            <ListForm
              title={ContactUsTables3[0].Title}
              Data={ContactUsTables3[0].linkList}
              type="listLink"
            />
          </div>
          <div className="my-6">
            <ListForm
              title={ContactUsTables4[0].Title}
              Data={ContactUsTables4[0].linkList}
              type="listLink"
            />
          </div>
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
              type="list-icon"
            />
          </div>
        </div>
      )}
    </HeaderScroll>
  );
}

export default ContactUsPage;
