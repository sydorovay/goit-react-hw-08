import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';

const ContactsPage = () => {
  const contacts = [
  ];

  return (
    <div>
      <h1>Contacts</h1>
      <Filter />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactsPage;