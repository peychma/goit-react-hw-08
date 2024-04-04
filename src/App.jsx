import React, { useEffect } from "react";
import "./App.css";
import ContactForm from "./components/contactform/ContactForm";
import SearchBox from "./components/searchbox/SearchBox";
import ContactList from "./components/contactlist/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { selectLoading, selectError } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && (
        <div>Loading... </div>
      )}
      <ContactList />
    </div>
  );
}

export default App;

