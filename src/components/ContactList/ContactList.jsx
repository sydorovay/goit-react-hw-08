import { useSelector } from 'react-redux';
import { selectNormalizedFilter } from '../../redux/filters/selectors';
import ContactListItem from './ContactListItem'; // Приклад компонента для відображення одного контакту

const ContactList = ({ contacts }) => {
  const normalizedFilter = useSelector(selectNormalizedFilter);

  // Фільтруємо контакти на основі нормалізованого фільтра
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;