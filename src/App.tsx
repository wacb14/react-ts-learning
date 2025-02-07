import { useState } from 'react';
import { Button } from './components';
function App() {
  function countMore() {
    setCount(count => count + 1);
  }
  const [count, setCount] = useState(0);
  return (
    <>
      <Button label={`Count is: ${count}`} parentMethod={countMore} />
    </>
  );
}

export default App;
