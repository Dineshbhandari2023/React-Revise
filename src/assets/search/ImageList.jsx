import React, { useContext } from "react";
import { ImageContext } from "./FourthApp";
import ImageShow from "./ImageShow";
import Skeleton from "./Skeleton";

const ImageList = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);

  return (
    <>
      <h1 className="text-center mt-6 font-semibold text-3xl">
        Results for {searchImage || "cat"}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
        {isLoading ? (
          <Skeleton item={12} />
        ) : (
          response.map((data, key) => <ImageShow key={key} data={data} />)
        )}
      </div>
    </>
  );
};

export default ImageList;
