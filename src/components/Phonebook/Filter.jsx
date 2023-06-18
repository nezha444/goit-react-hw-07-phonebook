import { setFilter } from '../redux/Phonebook/phonebookSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const { filter } = useSelector(state => state.phonebook);
  const dispatch = useDispatch();
  const hendleChangeFilter = event => dispatch(setFilter(event.target.value));

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={hendleChangeFilter}
        value={filter}
      />
    </div>
  );
};
