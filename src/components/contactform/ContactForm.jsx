import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css"
import { useDispatch, useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    name: "",
    number: ""
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name is too short!")
      .max(50, "Name must be less than 50 characters"),
    number: Yup.string()
      .required("Number is required")
      .min(3, "Number is too short!")
      .max(15, "Number must be less than 15 characters")
  });

 const onSubmit = (values, { resetForm }) => {
    const existingContact = contacts.find(contact => contact.name === values.name || contact.number === values.number);
    if (existingContact) {
      setErrorMessage("This contact already exists!");
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <div className={css.contactform}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={css.forma}>
          <div className={css.form}>
            <label htmlFor="name" className={css.paragraf}>Name</label>
            <Field type="text" id="name" name="name" className={css.addtext} />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div className={css.form}>
            <label htmlFor="number" className={css.paragraf}>Number</label>
            <Field type="text" id="number" name="number" className={css.addtext} />
            <ErrorMessage name="number" component="div" className="error" />
          </div>
          {errorMessage && <div className="error">{errorMessage}</div>}
          <button type="submit" className={css.addbutton}>Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
