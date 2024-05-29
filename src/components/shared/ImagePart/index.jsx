import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
function ImagePart({ imageUrl }) {
  return (
    <div className="my-14">
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
