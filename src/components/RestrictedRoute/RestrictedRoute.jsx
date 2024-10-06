import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export default function RestrictedRoute({ element, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : element;
}