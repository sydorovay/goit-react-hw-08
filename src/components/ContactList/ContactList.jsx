import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors'; 

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  if (!contacts || contacts.length === 0) {
    return <p>No contacts found</p>;
  }

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>{contact.name}: {contact.number}</li>
      ))}
    </ul>
  );
};

export default ContactList;