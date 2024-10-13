import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts/contactsOperations';
import { selectFilteredContacts } from '../../redux/contacts/contactsSelectors';
import SearchBox from '../../components/SearchBox/SearchBox';
import styles from './ContactsPage.module.css';

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