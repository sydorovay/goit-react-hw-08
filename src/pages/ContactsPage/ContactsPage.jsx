import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import styles from './ContactsPage.module.css';
import SearchBox from '../../components/SearchBox/SearchBox';

const ContactsPage = () => {
  return (
    <div className={styles.contactsPage}>
      <SearchBox />
      <h1>Contacts</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;