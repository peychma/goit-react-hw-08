import { useState, useEffect } from 'react';
import './App.css';
import ContactForm from "./components/contactform/ContactForm";
import SearchBox from "./components/searchbox/SearchBox";
import ContactList from "./components/contactlist/ContactList";

function App() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
  ];
  
  const [contacts, setContacts] = useState(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    return storedContacts || initialContacts;
  });

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact}/>
      <SearchBox searchTerm={searchTerm} onSearch={handleSearch}/>
      <ContactList contacts={filteredContacts} onDelete={deleteContact}/>
    </div>
  );
}

export default App;

