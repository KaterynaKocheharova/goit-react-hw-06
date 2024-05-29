import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.includes(filter)
  );

  return (
    <ul className={css["contact-list"]}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contactData={contact} />
      ))}
    </ul>
  );
}
