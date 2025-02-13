import { Button, RedLabel } from './components';

function handleClick() {
  alert('They have clicked me!');
}
function clicker() {
  alert('This is a red button');
}

function App() {
  // Here we are demonstrating the types and labels that we can send through the children prop and also the composition pattern
  return (
    <div style={{ color: 'white' }}>
      <RedLabel>
        <Button parentMethod={clicker}>Red Button</Button>
      </RedLabel>
      <Button parentMethod={handleClick}>
        <div>Regular button</div>
      </Button>
    </div>
  );
}

export default App;
