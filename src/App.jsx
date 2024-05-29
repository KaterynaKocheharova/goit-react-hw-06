import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css["main-title"]}>Phonebook</h1>
      <div className={css["top-container"]}>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
}
