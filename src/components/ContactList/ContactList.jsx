import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/contactsSlice';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  if (!Array.isArray(filteredContacts)) {
    return <div>Error: Contacts data is not an array.</div>;
  }

  return (
    <ul className={css.contactList}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <li>No contacts available.</li>
      )}
    </ul>
  );
};

export default ContactList;