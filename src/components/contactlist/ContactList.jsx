import React from 'react'
import Contact from '../contact/Contact';
import css from "./ContactList.module.css"

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactlist}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete}/>
      ))}
    </ul>
  );
};

export default ContactList