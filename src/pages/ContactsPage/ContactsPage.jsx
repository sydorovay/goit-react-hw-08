import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import SearchBox from '../../components/SearchBox/SearchBox';
import styles from './ContactsPage.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={styles.contactsPage}>
      <h2>Contacts</h2>
      <SearchBox />
      <ContactForm />
      {contacts.length === 0 ? (
        <p>No contacts available</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id} className={styles.contactItem}>
              <span>{contact.name} - {contact.number} - {contact.email}</span>
              <button
                onClick={() => dispatch(deleteContact(contact.id))}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ContactsPage;