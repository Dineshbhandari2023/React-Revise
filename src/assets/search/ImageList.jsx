import React, { useContext } from "react";
import { ImageContext } from "./FourthApp";
import ImageShow from "./ImageShow";

const ImageList = () => {
  const { response, isLoading } = useContext(ImageContext);
  return (
    <div className="flex flex-col ">
      <h2 className="flex p-3 m-2 justify-center text-center text-2xl font-semibold">
        Search for
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {response.map((data, key) => {
          <ImageShow key={key} data={data} />;
        })}
      </div>
    </div>
  );
};

export default ImageList;
