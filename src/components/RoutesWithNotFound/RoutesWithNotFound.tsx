import { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

interface Props {
  children: ReactNode;
}
export function RoutesWithNotFound({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route path='*' element={<Navigate to='/404' />} />
      <Route
        path='/404'
        element={<h1>Error 404. Ups! the resource was not found</h1>}
      />
    </Routes>
  );
}
