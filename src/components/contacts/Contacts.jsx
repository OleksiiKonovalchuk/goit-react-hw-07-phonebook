import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from 'redux/contacts/contact-selectors';
import { getFilteredContacts } from 'redux/filter/filter-selectors';
import { useEffect } from 'react';
import {
  fetchAllContacts,
  fetchDeleteContact,
} from 'redux/contacts/contact-operations';
import css from './contacts.module.css';

const Contacts = () => {
  const isLoading = useSelector(store => store.contacts.isLoading);
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilteredContacts);
  const filterContactsContacts = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(fetchDeleteContact(id));
  };
  const elements = filterContactsContacts?.map(({ name, id, number }) => {
    return (
      <li className={css.item} key={id} name={id}>
        <p className={css.text}>
          {name}: {number}
        </p>
        <button
          type="button"
          className={css.button}
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </li>
    );
  });
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul className={css.list}>{elements}</ul>
    </>
  );
};
export default Contacts;
