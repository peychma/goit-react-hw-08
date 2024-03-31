import React from "react";
import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice"; 

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter); 

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div>
      <ul className={css.contactlist}>
        {filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact}/>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
