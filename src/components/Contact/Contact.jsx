
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import css from './Contact.module.css';
const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
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