import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(credentials));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={credentials.name} onChange={handleChange} required />
      <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
      <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationPage;