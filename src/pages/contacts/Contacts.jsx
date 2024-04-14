/*import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "../../components/contactlist/ContactList";
import ContactForm from "../../components/contactform/ContactForm";
import { fetchContacts } from "../../redux/contacts/operations";
import SearchBox from "../../components/searchbox/SearchBox";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
      <div>
        <h1>Your contacts page</h1>
        <div>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      </div>
  );
};

export default Contacts;*/

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/contactlist/ContactList";
import ContactForm from "../../components/contactform/ContactForm";
import { fetchContacts } from "../../redux/contacts/operations";
import SearchBox from "../../components/searchbox/SearchBox";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Your contacts page</h1>
      <div>
        <ContactForm />
        <SearchBox />
        {contacts.length > 0 && <ContactList />}
      </div>
    </div>
  );
};

export default Contacts;
