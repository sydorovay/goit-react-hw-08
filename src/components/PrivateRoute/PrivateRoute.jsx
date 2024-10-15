import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function PrivateRoute({ element, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? element : <Navigate to={redirectTo} />;
}