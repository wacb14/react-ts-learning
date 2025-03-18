import { ReactNode } from 'react';
import './App.css';

interface Props {
  children: ReactNode;
}

function App({ children }: Props) {
  return (
    <>
      <nav>
        <h1>Navbar</h1>
      </nav>
      {children}
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
}

export default App;
