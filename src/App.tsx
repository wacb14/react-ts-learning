import { useFetch } from './hooks';

const url = 'https://jsonplaceholder.typicode.com/posts';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const { data, loading, error } = useFetch<Post>(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Ups! There was an error</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
