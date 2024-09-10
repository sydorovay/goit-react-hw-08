import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps'; // Імпортуємо операцію з правильного файлу
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id)); // Викликаємо операцію видалення
  };

  return (
    <li className={css.contactItem}>
      <span>{contact.name}: {contact.number}</span>
      <button onClick={handleDelete} className={css.deleteButton}>
        Delete
      </button>
    </li>
  );
};

export default Contact;