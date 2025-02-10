import { useState, useEffect } from 'react';
export function Data() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/pposts');

      if (!res.ok) {
        throw new Error('An error occurred while obtaining data');
      }

      const data = await res.json();

      setData(data);
    } catch (e) {
      setError(e as string);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Ups! There was an error</div>;
  }
  return <div>{JSON.stringify(data)}</div>;
}
