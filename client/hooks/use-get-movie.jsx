import { useCallback, useState } from "react";
import axios from "axios";
export const useGetMovie = () => {
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (url) => {
    setIsLoading(true);
    const config = {};
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setMovieData(response.data);
    } catch (err) {
      setError(true);
      console.err(err.message);
    }
    setIsLoading(false);
  }, []);
  return {
    movieData,
    sendRequest,
    isLoading,
    error,
  };
};
