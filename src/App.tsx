import { useApi } from './hooks/useApi';
import { Character } from './models';
import { getCharacter } from './services/api.service';

function App() {
  const { loading, error, data, fetchData } = useApi<Character, number>(
    getCharacter,
    { autoFetch: true, params: 1 }
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Ups there was an error {error.message}</p>;
  }

  return (
    <>
      {JSON.stringify(data)}
      <button onClick={() => fetchData(2)}>Get Character</button>
    </>
  );
}

export default App;
