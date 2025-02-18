import { createContext, ReactNode, useContext, useState } from 'react';

// We must use context to communicate sibling components, for parent-child components we must use composition pattern

interface GlobalContextType {
  counter: number | null;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const GlobalContext = createContext<GlobalContextType>({
  counter: null,
  setCounter: () => {},
});

interface GlobalProps {
  children: ReactNode;
}

export function GlobalProvider({ children }: GlobalProps) {
  const [counter, setCounter] = useState(0);
  return (
    <GlobalContext.Provider value={{ counter, setCounter }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context.counter === null) {
    throw new Error('GlobalContext must be used within the GlobalProvider');
  }
  return context;
}
