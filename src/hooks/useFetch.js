import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, method = 'GET', requestData = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios({
          method,
          url,
          data: requestData,
        });
        setData(response.data);
      } catch (err) {
        console.log(err);
        
        setError(err);
      }
      setLoading(false);
    };

    fetchData();
  }, [url, method, requestData]);

  return { data, loading, error };
};

export default useFetch;
