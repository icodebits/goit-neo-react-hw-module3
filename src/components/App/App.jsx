import { useState } from 'react'
import './App.css'
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';


function App() {
  const [contacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <SearchBox value={filter} onChange={setFilter} />
        <ContactList contacts={filteredContacts} />
      </div>
    </>
  )
}

export default App
