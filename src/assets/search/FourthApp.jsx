// import React, { useState } from "react";
// import SearchBar from "./SearchBar";
// import ImageList from "./ImageList";
// import searchApi from "../../components/server/Api";

// const FourthApp = () => {
//   const [image, setImage] = useState([]);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (term) => {
//     try {
//       const result = await searchApi(term);
//       setImage(result);
//       setError(null);
//     } catch (err) {
//       setError(
//         "Network Error: Please check your internet connection and try again."
//       );
//       setImage([]);
//     }
//   };

//   return (
//     <div>
//       <SearchBar onSubmit={handleSubmit} />
//       {error && <div className="error-message">{error}</div>}
//       <ImageList images={image} />
//     </div>
//   );
// };

// export default FourthApp;

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import searchApi from "../../components/server/Api";

const FourthApp = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (term) => {
    try {
      const result = await searchApi(term);
      setImages(result);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(
        "Unable to fetch images. Please check your internet connection."
      );
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {error && <div className="text-red-500 text-center mt-5">{error}</div>}
      <ImageList images={images} />
    </div>
  );
};

export default FourthApp;
