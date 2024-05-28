import { useState, useEffect } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import css from "./App.module.css";

export default function App() {
  const contactsKey = "contacts";
  // ================================= CONTACTS STATE

  const [contacts, setContacts] = useState(() => {
    const lsContacts = localStorage.getItem(contactsKey);
    if (lsContacts !== null) {
      return JSON.parse(lsContacts);
    } else {
      return [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
    }
  });

  // =============================== NAME FILTER STATE
  const [nameFilter, setNameFilter] = useState("");

  // =============================== SAVE CONTACTS TO LS
  useEffect(() => {
    localStorage.setItem(contactsKey, JSON.stringify(contacts));
  }, [contacts]);

  // ================================= GETTING FILTERED CONTACTS
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  // ================================= ADDING CONTACTS
  function addContact(contactObject) {
    setContacts((prevContacts) => [...prevContacts, contactObject]);
  }

  // ================================= DELETE CONTACTS
  function deleteContact(id) {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  }

  // =============================== MARKUP AND PASSING PROPS
  return (
    <div className={css.container}>
      <h1 className={css["main-title"]}>Phonebook</h1>
      <div className={css["top-container"]}>
        <ContactForm onAddContact={addContact} />
        <SearchBox currentNameFilter={nameFilter} onFilter={setNameFilter} />
      </div>
      <ContactList contactsArr={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}
