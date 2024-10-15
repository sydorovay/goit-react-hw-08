import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewContact } from '../../redux/contacts/operations';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewContact({ name, number })); 
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;