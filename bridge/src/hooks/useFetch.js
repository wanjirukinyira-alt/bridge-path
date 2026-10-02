import { useEffect, useState } from 'react';

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(url));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setData(null);
      setLoading(false);
      setError(null);
      return undefined;
    }

    let isMounted = true;
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setData(null);

      try {
        const response = await fetch(url, {
          ...options,
          signal: controller.signal,
        });

        if (!response.ok) {
          const statusMessage = response.status === 404 ? 'Student not found' : 'Unable to load the requested data.';
          throw new Error(statusMessage);
        }

        const result = await response.json();

        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (fetchError) {
        if (fetchError.name === 'AbortError') {
          return;
        }

        if (isMounted) {
          setError(fetchError.message || 'Something went wrong while fetching data.');
          setData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}
