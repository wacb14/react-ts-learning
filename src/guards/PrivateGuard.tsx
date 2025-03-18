import { Navigate, Outlet } from 'react-router-dom';

export function PrivateGuard() {
  const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to={'/login'} replace />;
}
