import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useModalContext } from '../../context';
import './Modal.css';

interface Props {
  children: ReactNode;
}

const eventListener = 'keydown';

export function Modal({ children }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const { state, setState } = useModalContext();

  function closeModal() {
    setState(false);
  }

  const modalRoot = document.getElementById('modal');

  function handleContentClick(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setState(false);
      }
    }

    if (state) {
      document.addEventListener(eventListener, handleEsc);
    }

    return () => {
      document.removeEventListener(eventListener, handleEsc);
    };
  }, [state, setState]);

  if (!state || !modalRoot) {
    return null;
  }

  return createPortal(
    <div className='overlay' onClick={closeModal}>
      <div className='modal' onClick={handleContentClick} ref={modalRef}>
        {children}
        <button className='close-button' onClick={closeModal}>
          Close
        </button>
      </div>
    </div>,
    modalRoot
  );
}
