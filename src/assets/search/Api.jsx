import axios from "axios";

const searchApi = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      // Authorization: "Client-ID xPIk5Sw0rrbeKdwilT2FsYAd8S_P77zeAeM-1eyx1LE",
      Authorization: "Client-ID xPIk5Sw0rrbeKdwilT2FsYAd8S_P77zeAeM-1eyx1LE",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchApi;

// import axios from "axios";

// const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

// const searchApi = async (term) => {
//   try {
//     const response = await axios.get("https://api.unsplash.com/search/photos", {
//       headers: {
//         Authorization: `Client-ID ${API_KEY}`,
//       },
//       params: {
//         query: term,
//       },
//     });

//     if (response.data && response.data.results) {
//       return response.data.results;
//     } else {
//       throw new Error("Unexpected response format");
//     }
//   } catch (error) {
//     console.error("Error fetching data from Unsplash API:", error);
//     return [];
//   }
// };

// export default searchApi;
