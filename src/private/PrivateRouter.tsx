import { Navigate, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard/Dashboard';
import { RoutesWithNotFound } from '../components/RoutesWithNotFound/RoutesWithNotFound';

export function PrivateRouter() {
  return (
    <RoutesWithNotFound>
      <Route path='/' element={<Navigate to='/dashboard' />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/about' element={<Dashboard />} />
      <Route path='/user' element={<Dashboard />} />
    </RoutesWithNotFound>
  );
}
