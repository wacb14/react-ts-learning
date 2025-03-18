import { createContext, ReactNode, useContext, useState } from 'react';

export const ModalContext = createContext<{
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  state: false,
  setState: () => null,
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ state, setState }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('Modal is being used outside the provider');
  }

  return context;
}
