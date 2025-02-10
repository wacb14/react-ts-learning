import { useEffect, useState } from 'react';

type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
  data: Data<T>;
  loading: boolean;
  error: ErrorType;
}

export function useFetch<T>(url: string): Params<T> {
  const [data, setData] = useState<Data<T>>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error('An error occurred during the request');
        }

        const jsonData: T = await response.json();
        setData(jsonData);

        setError(null);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);
  return { data, loading, error };
}
