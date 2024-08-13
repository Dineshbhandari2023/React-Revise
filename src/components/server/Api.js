// import axios from "axios";

// const searchApi = () => {
//   const fetchData = async (term) => {
//     try {
//       const response = await axios({
//         url: "https://api.unsplash.com/search/photos",
//         method: "GET",
//         params: {
//           query: term,
//         },

//         headers: {
//           Authorization:
//             "Client-ID xPIk5Sw0rrbeKdwilT2FsYAd8S_P77zeAeM-1eyx1LE",
//         },
//       });
//       return response;
//     } catch (error) {
//       console.error("Error fetching data from Unsplash API:", error.message);
//       return [];
//     }
//   };
//   return fetchData();
// };

// export default searchApi;
import axios from "axios";
import { useEffect, useState } from "react";

const searchApi = (param) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  axios.defaults.baseURL = "https://api.unsplash.com";

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(url);
      setResponse(res.data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);

  return {
    response,
    isLoading,
    error,
    fetchData: (url) => fetchData(url),
  };
};

export default searchApi;
