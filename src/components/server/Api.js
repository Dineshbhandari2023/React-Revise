// import axios from "axios";

// const searchApi = async (term) => {
//   try {
//     const response = await axios.get("https://api.unsplash.com/search/photos", {
//       method: "get",
//       headers: {
//         Authorization: "Client-ID xPIk5Sw0rrbeKdwilT2FsYAd8S_P77zeAeM-1eyx1LE",
//       },
//       params: {
//         query: term,
//       },
//       data: {
//         results: term,
//       },
//     });
//   } catch (error) {
//     console.error("Error fetching data from Unsplash API:", error.message);
//     return [];
//   }
//   return response.data.results;
// };

// export default searchApi;

import axios from "axios";

const searchApi = async (term) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID xPIk5Sw0rrbeKdwilT2FsYAd8S_P77zeAeM-1eyx1LE",
      },
      params: {
        query: term,
        per_page: 10, // Optional: limits the number of images returned
      },
    });
    console.log(response.json());
    return response.data.results.json();
  } catch (error) {
    console.error("Error fetching data from Unsplash API:", error.message);
    return [];
  }
};

export default searchApi;
