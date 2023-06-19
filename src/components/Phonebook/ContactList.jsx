import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { removeContact } from '../redux/Phonebook/phonebookSlice';
import {
  deleteContactsThunk,
  getContactsThunk,
} from 'components/redux/Phonebook/phonebookThunk';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(state => state.phonebook);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const getFilterContacts = () => {
    return contacts.items.filter(
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
              {contact.name}: {contact.phone}
            </p>
            <button
              onClick={() => {
                console.log(contact.id);
                return dispatch(
                  // removeContact(contact.id),
                  deleteContactsThunk(contact.id)
                );
              }}
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
