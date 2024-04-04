import React from "react";
import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { selectVisibleContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <ul className={css.contactlist}>
        {filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

