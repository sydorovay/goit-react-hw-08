import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsOperations'; 
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import SearchBox from '../../components/SearchBox/SearchBox';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Contacts</h2>
      <SearchBox /> 
      {contacts.length === 0 ? (
        <p>No contacts available</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} - {contact.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactsPage;