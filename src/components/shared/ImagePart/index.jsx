import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";


function ImagePart({ imageUrl, onClick, width = "100%", height = "100%" }) {
  return (
    <div onClick={onClick} className="my-14 cursor-pointer flex justify-center">
      <LazyLoadImage
        effect="blur"
        alt="notFound"
        src={imageUrl}
        className="object-cover"
        height={height}
        width={width}
      />
    </div>
  );
}

export default ImagePart;
