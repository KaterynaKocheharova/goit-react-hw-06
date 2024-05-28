import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contactsArr, onDelete }) {
  return (
    <ul className={css["contact-list"]}>
      {contactsArr.map((contact) => (
        <Contact key={contact.id} contactData={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
}
