import { useEffect, useState } from 'react';

// This kind of async errors are not automatically catch by the errorBoundary, so we have to catch them in the life cycle of the component.

export function PromiseExample() {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        throw new Error('Promise error');
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      }
    }

    fetchData();
  }, []);
  
  if (error) {
    throw error;
  }

  return <div>{data}</div>;
}
