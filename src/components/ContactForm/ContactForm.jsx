import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { Formik, Field, Form } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();

  // ====================== HANDLE VALIDATION

  const AddContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string().min(8, "Too Short!").required("Required"),
  });

  // ======================= HANDLE SUBMIT
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(addContact(values));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={AddContactSchema}
    >
      <Form className={css.form}>
        <div className={css["inputs-container"]}>
          <div className={css["form-input-box"]}>
            <label htmlFor={nameId}>Name</label>
            <Field className={css.input} id={nameId} name="name" />
            <ErrorMessage
              className={css["error-message"]}
              name="name"
              component="span"
            />
          </div>
          <div className={css["form-input-box"]}>
            <label htmlFor={numberId}>Number</label>
            <Field className={css.input} id={numberId} name="number" />
            <ErrorMessage
              className={css["error-message"]}
              name="number"
              component="span"
            />
          </div>
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
