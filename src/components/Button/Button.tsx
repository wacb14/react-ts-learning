import { ReactNode } from 'react';
import './Button.css';
import { useGlobalContext } from '../../context/GlobalContext';

// We must use context to communicate sibling components, for parent-child components we must use composition pattern

interface Props {
  children: ReactNode;
  parentMethod: () => void;
}
// Never do this (Never declare two components in one file, it's only with demonstrative purposes)
export function RedLabel({ children }: Pick<Props, 'children'>) {
  const { counter } = useGlobalContext();
  return (
    <span className='color-red'>
      {children} {counter}
    </span>
  );
}

export function Button({ parentMethod, children }: Props) {
  const { counter, setCounter } = useGlobalContext();
  return (
    <button
      className='custom-button'
      onClick={() => {
        if (counter) setCounter(counter + 1);
        else {
          setCounter(0);
          parentMethod();
        }
      }}
    >
      {children}
    </button>
  );
}
