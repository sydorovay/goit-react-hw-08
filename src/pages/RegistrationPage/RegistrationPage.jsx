import { useState } from 'react'; 
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Додано для успішного повідомлення

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
      await dispatch(register(credentials)).unwrap();
      setSuccessMessage('ВYou have been successfully registeredі!'); // Повідомлення про успішну реєстрацію
      setErrorMessage(''); // Скидаємо повідомлення про помилку
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage(''); // Скидаємо повідомлення про успішну реєстрацію
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Показуємо повідомлення про успіх */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <input
        type="text"
        name="name"
        value={credentials.name}
        onChange={handleChange}
        placeholder="Enter your name"
        required
      />
      <input
        type="email"
        name="email"
        value={credentials.email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Enter your password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationPage;