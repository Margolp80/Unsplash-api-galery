import React from "react";
import ImageCard from "./imageCard";
import "./imageList.css";
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
      }}
      className="image-list"
    >
      {images}
    </div>
  );
};

ImageList.propTypes = {};

ImageList.defaultProps = {};

export default ImageList;
