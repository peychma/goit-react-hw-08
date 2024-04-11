import React from "react";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.contact}>
      <p className={css.contactparagraf}>{contact.name}</p>
      <p className={css.contactparagraf}>{contact.number}</p>
      <button className={css.deletebutton} onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;

