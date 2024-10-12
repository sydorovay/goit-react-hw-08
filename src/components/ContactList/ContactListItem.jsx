import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(`Deleting contact with ID: ${id}`); // Додати для перевірки
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.listItem}>
      <span>{name}: {number}</span>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;