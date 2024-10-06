import { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsOperations';
import { selectFilteredContacts } from '../../redux/contacts/contactsSelectors';
import { selectToken } from '../../redux/auth/authSelectors'; // Додайте селектор для отримання токена
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import styles from './ContactsPage.module.css';



const ContactsPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken); // Отримуємо токен з Redux
  const contacts = useSelector(selectFilteredContacts); // Отримуємо фільтровані контакти з Redux

  useEffect(() => {
  const fetchContactsData = async () => {
    if (!token) {
      console.log('No token found, skipping fetch');
      return; // Якщо токена немає, пропускаємо запит
    }

    try {
      const response = await fetch('https://connections-api.goit.global/contacts', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Error fetching contacts');
      }

      const contactsData = await response.json();
      console.log('Fetched contacts:', contactsData);
      
      dispatch(fetchContacts(contactsData)); // Додайте ваш action для збереження контактів
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    }
  };

  fetchContactsData();
}, [dispatch, token]); 
  return (
    <div className={styles.container}>
      <h1>Contacts</h1>
      <ContactForm />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactsPage;