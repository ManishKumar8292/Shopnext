import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(url);

      if (!res.ok) {
        console.log("Data fetching issue");
      } else {
        const data = await res.json();
        setData(data);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading };
};
export default useFetch;
