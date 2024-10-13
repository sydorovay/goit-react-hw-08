import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUserThunk } from './redux/auth/authOperations';
import Layout from './components/Layout/Layout';
import HomePage from './ціу5рц5ер/HomePage/HomePage';
import RegistrationPage from './ціу5рц5ер/RegistrationPage/RegistrationPage';
import LoginPage from './ціу5рц5ер/LoginPage/LoginPage';
import ContactsPage from './ціу5рц5ер/ContactsPage/ContactsPage';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" element={<RegistrationPage />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" element={<LoginPage />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" element={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;