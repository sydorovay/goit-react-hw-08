import { useDispatch } from 'react-redux';
import { addNewContact } from '../../redux/contacts/contactsOperations';

function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const contact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    dispatch(addNewContact(contact));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="tel" name="number" placeholder="Number" required />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;