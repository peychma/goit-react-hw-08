import React from 'react'
import css from "./Contact.module.css"

const Contact = ({ contact, onDelete }) => {
  const handleClick = () => {
    onDelete(contact.id);
  };
  return (
    <li className={css.contact}>
      <p className={css.contactparagraf}>{contact.name}</p>
      <p className={css.contactparagraf}>{contact.number}</p>
      <button className={css.deletebutton} onClick={handleClick}>Delete</button>
    </li>
  );
};

export default Contact