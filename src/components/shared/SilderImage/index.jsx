import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const SliderImage = ({ images, onImageClick }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`slide-${index}`}
            className="w-full h-auto cursor-pointer"
            onClick={() => onImageClick(image)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderImage;
