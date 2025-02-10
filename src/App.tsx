import { useState } from 'react';
import { Button } from './components';
function App() {
  // Batching
  function countFive() {
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
    // Al ejecutar como una función si actualiza el valor previo
  }
  function countOne() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // Aqui se agrupan los cambios de estado y no se actualiza el valor hasta que haya un render
  }
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count is: {count}</h1>
      <Button label={`Count One`} parentMethod={countOne} />
      <Button label={`Count Five`} parentMethod={countFive} />
    </>
  );
}

export default App;
