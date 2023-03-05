import { Provider } from 'react-redux';
import store from 'redux/store';

import css from './App.module.css';
import Form from './form/Form';
import Contacts from './contacts/Contacts';
import Filter from './filter/Filter';

const App = () => {
  return (
    <Provider store={store}>
      <div className={css.App}>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
    </Provider>
  );
};

export default App;
