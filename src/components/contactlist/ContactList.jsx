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
