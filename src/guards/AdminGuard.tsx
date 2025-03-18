import { Navigate, Outlet } from 'react-router-dom';

export function PrivateGuard() {
  const isAdmin = true;
  return isAdmin ? <Outlet /> : <Navigate to={'/private/dashboard'} replace />;
}
