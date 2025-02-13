import { ReactNode } from 'react';
import './Button.css';

interface Props {
  children: ReactNode;
  parentMethod: () => void;
}
// Never do this (Never declare two components in one file, it's only with demonstrative purposes)
export function RedLabel({ children }: Pick<Props, 'children'>) {
  return <span className='color-red'>{children}</span>;
}

export function Button({ parentMethod, children }: Props) {
  return (
    <button className='custom-button' onClick={parentMethod}>
      {children}
    </button>
  );
}
