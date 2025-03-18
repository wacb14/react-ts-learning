import { createRoot } from 'react-dom/client';
import './index.css';
import { StrictMode } from 'react';
import { AppHookContainer } from './AppHookContainer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppHookContainer />
  </StrictMode>
);
