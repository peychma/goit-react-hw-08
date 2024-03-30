/*import React from "react"
import Contact from "../contact/Contact";
import css from "./ContactList.module.css"

const ContactList = ({contacts}) => {
  return (
    <ul className={css.contactlist}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact}/>
      ))}
    </ul>
  );
};

export default ContactList;*/
/*import React from 'react';
import { useSelector } from 'react-redux';
import Contact from '../contact/Contact';
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <ul className={css.contactlist}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact}/>
      ))}
    </ul>
  );
};

export default ContactList;*/

// ContactList.jsx

import React from "react";
import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  console.log("Contacts state:", contacts);

  return (
    <ul className={css.contactlist}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact}/>
      ))}
    </ul>
  );
};

export default ContactList;
