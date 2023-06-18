import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../redux/Phonebook/phonebookSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(state => state.phonebook);

  const getFilterContacts = () => {
    return contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <div>
      <p>Contacts</p>
      <ul>
        {getFilterContacts().map(contact => (
          <li key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button
              onClick={() => dispatch(removeContact(contact.id))}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
