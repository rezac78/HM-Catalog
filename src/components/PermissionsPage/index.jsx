import HomeContentPage from "../shared/HomeContentPage";
import { permissionsMain, ImageSwiper } from "../../Event/fakeData";
import HeaderTitle from "../shared/HeaderTitle";
import HeaderDeskTopTitle from "../DeskTop/HeaderTitle";
import HeaderScroll from "../shared/HeaderScroll";
import SliderImage from "../shared/SilderImage";
import { Modal } from 'react-responsive-modal';
import { useState } from "react";
function PermissionsPage({ isScrolled, isWide }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };
  return (
    <HeaderScroll isScrolled={isScrolled}>
    {!isWide ? (
      <>
        <HeaderTitle title="مجوزها" titleLink="/about" />
        {permissionsMain.map((e) => (
          <HomeContentPage
            key={e.id}
            title={e.Title}
            content={e.content}
            type={false}
          />
        ))}
        <div className="flex mx-auto w-10/12">
          <SliderImage images={ImageSwiper} onImageClick={handleImageClick} />
        </div>
      </>
    ) : (
      <div className="max-w-[1300px] mx-auto px-20">
        <div className="flex justify-start mt-10">
          <HeaderDeskTopTitle Title="موسسه مشاوره بازاریابی بین‌المللی همراهان فردایی روشن" />
        </div>
        <div className="border-t-2 border-blue-50 w-full flex mx-auto mt-5 mb-20"></div>
        <HeaderTitle title="مجوزها" titleLink="/about" />
        <div className="mx-auto my-10">
          {permissionsMain.map((e) => (
            <HomeContentPage
              key={e.id}
              title={e.Title}
              content={e.content}
              type={false}
            />
          ))}
        </div>
        <div className="flex mx-auto w-5/12">
          <SliderImage images={ImageSwiper} onImageClick={handleImageClick} />
        </div>
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
      {currentImage && (
        <img src={currentImage} className="hidden sm:flex h-[90vh]" alt="Zoomed" />
      )}
    </Modal>
  </HeaderScroll>
  );
}

export default PermissionsPage;
