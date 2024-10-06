import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export default function PrivateRoute({ element: Component, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? Component: <Navigate to={redirectTo} />;
}
