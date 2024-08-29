import { useState, useEffect } from "react";
import './App.css'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
import ContactForm from "../ContactForm/ContactForm"

function App() {
  const defaultContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts")
    const parsedContacts = JSON.parse(savedContacts)

    if (parsedContacts !== null && parsedContacts.length > 0) {
      return parsedContacts
    } else {
      return defaultContacts
    }
  })
  
  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact])
  }

  const handleDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    )
  }

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )
  }

  const filteredContacts = getFilteredContacts()

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <SearchBox value={filter} onChange={setFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </>
  )
}

export default App
