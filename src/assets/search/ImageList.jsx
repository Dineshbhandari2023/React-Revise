import React from "react";

const ImageList = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div key={image.id}>
          <img
            src={image.urls.small}
            alt={image.description || "Unsplash Image"}
            className="w-full h-auto rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
