import { Button, RedLabel } from './components';
import { GlobalProvider } from './context/GlobalContext';

function handleClick() {
  alert('They have clicked me!');
}

function App() {
  return (
    <GlobalProvider>
      <div style={{ color: 'white' }}>
        <RedLabel>{''}</RedLabel>
        <Button parentMethod={handleClick}>
          <div>+1 button</div>
        </Button>
      </div>
    </GlobalProvider>
  );
}

export default App;
