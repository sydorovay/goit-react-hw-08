import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
      <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;