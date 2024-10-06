import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUserThunk } from './redux/auth/authOperations';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import { selectCurrentUser } from './redux/auth/authSelectors';

const App = () => {
  const dispatch = useDispatch();
  const isCurrentUser = useSelector(selectCurrentUser); 

  useEffect(() => {
    dispatch(getCurrentUserThunk()); // Викликаємо thunk для отримання поточного користувача
  }, [dispatch]);

  return (
    <Routes> {/* Вже підключений Router у верхньому компоненті */}
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