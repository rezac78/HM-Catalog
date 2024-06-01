import HomeContentPage from "../shared/HomeContentPage";
import { ChartMain } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import ImagePart from "../shared/ImagePart";
import { Modal } from 'react-responsive-modal';
import { useState, useEffect } from "react";
import 'react-responsive-modal/styles.css'; // Import styles for the modal

function ChartPage({ isScrolled, isWide }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <HeaderScroll isScrolled={isScrolled}>
      {!isWide ? (
        <>
          <HeaderTitle title="چارت سازمانی" titleLink="/about" />
          {ChartMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
          <ImagePart onClick={() => setIsOpen(!isOpen)} imageUrl={"/images/chart.svg"} />
        </>
      ) : (
        <div className="max-w-[1300px] mx-auto px-20">
          <div className="flex justify-start mt-10">
            <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
          </div>
          <div className="border-t-2 border-blue-50 w-full flex mx-auto mt-5 mb-20"></div>
          <HeaderTitle title="چارت سازمانی" titleLink="/about" />
          <div className="mx-auto my-10">
            {ChartMain.map((e) => (
              <HomeContentPage
                key={e.id}
                title={e.Title}
                content={e.content}
                type={false}
              />
            ))}
          </div>
          <ImagePart onClick={() => setIsOpen(!isOpen)} imageUrl={"/images/chart.svg"} />
        </div>
      )}
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        center
        styles={{
          modal: {
            padding: 0,
            maxWidth: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }
        }}
      >
        <img src="/images/chart.svg" alt="Chart" style={{ width: '100%' }} />
      </Modal>
    </HeaderScroll>
  );
}

export default ChartPage;
