import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/contactsSelectors';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>{contact.name} - {contact.email}</li>
      ))}
    </ul>
  );
};

export default ContactsPage;