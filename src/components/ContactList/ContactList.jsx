import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  return (
    <ul className={css["contact-list"]}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contactData={contact} />
      ))}
    </ul>
  );
}
