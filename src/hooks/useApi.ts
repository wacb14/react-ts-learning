import { useCallback, useEffect, useState } from 'react';
import { UseApiCall } from '../models';

type UseApiOptions<P> = {
  autoFetch?: boolean;
  params: P;
};

type Data<T> = T | null;
type CustomError = Error | null;

interface UseApiResult<T, P> {
  loading: boolean;
  data: Data<T>;
  error: CustomError;
  fetchData: (params: P) => void;
}

export function useApi<T, P>(
  apiCall: (params: P) => UseApiCall<T>,
  options?: UseApiOptions<P>
): UseApiResult<T, P> {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Data<T>>(null);
  const [error, setError] = useState<CustomError>(null);

  const fetchData = useCallback(
    (params: P) => {
      const { call, controller } = apiCall(params);
      setLoading(true);

      call
        .then(response => {
          setData(response.data);
          setError(null);
        })
        .catch(error => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
      return () => {
        controller.abort();
      };
    },
    [apiCall]
  );
  useEffect(() => {
    if (options?.autoFetch) {
      return fetchData(options.params);
    }
  }, [fetchData, options?.autoFetch, options?.params]);
  return { loading, data, error, fetchData };
}
