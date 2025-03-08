import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const rapidApiKey = RAPID_API_KEY;

  const fetchData = async () => {
    setIsLoading(true); // Corrected

    try {
      const response = await axios.request({
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          "x-rapidapi-key": rapidApiKey,
          "x-rapidapi-host": "jsearch.p.rapidapi.com",
        },
        params: { ...query },
      });

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert(`There is an error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, reFetch };
};

export default useFetch;
