import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../redux/Phonebook/phonebookSlice';
import { postContactsThunk } from 'components/redux/Phonebook/phonebookThunk';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.phonebook);

  const handleSubmit = (name, number) => {
    const newContact = {
      id: `${nanoid()}`,
      name: name,
      phone: number,
    };
    const isExist = contacts.items.some(
      el =>
        (el.name && el.name.toLowerCase() === name.toLowerCase()) ||
        (el.number && el.number === number)
    );
    if (isExist) {
      alert('Contact already exists');
      return;
    }
    dispatch(postContactsThunk(newContact));
    dispatch(addContacts(newContact));
  };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    console.log(name);
    handleSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label>
          Name
          <input
            onChange={handleInput}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={handleInput}
            type="tel"
            name="number"
            pattern="\\+?\\d{1,4}[-.\\s]?\\(?(\\d{1,3})\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
      {/* <button
        onClick={() => {
          dispatch(getContactsThunk());
        }}
        type="button"
      >
        aaaaaaaaaa
      </button> */}
    </div>
  );
};
ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};
