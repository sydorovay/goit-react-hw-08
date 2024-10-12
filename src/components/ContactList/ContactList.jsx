import { useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';
import { selectFilteredContacts } from '../../redux/contacts/contactsSelectors';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.contactList}>
      {contacts.length > 0 ? (
        contacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <li>No contacts found.</li>
      )}
    </ul>
  );
};

export default ContactList;