import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
function ImagePart({ imageUrl, onClick }) {
  return (
    <div onClick={onClick} className="my-14 cursor-pointer">
      <LazyLoadImage
        effect="blur"
        alt="notFound"
        src={imageUrl}
        className="object-cover"
        height={"100%"}
        width={"100%"}
      />
    </div>
  );
}
export default ImagePart;
