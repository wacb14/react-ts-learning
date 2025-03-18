import App from './App';
import { AppRouter } from './AppRouter';
import { GlobalProvider, ModalProvider } from './context';
import { ErrorBoundary } from './ErrorBoundary';

export function AppHookContainer() {
  return (
    <ErrorBoundary>
      <GlobalProvider>
        <ModalProvider>
          <App>
            <AppRouter />
          </App>
        </ModalProvider>
      </GlobalProvider>
    </ErrorBoundary>
  );
}
