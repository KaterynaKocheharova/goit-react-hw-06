import css from "./SearchBox.module.css";

export default function SearchBox({ currentNameFilter, onFilter }) {
  return (
    <div className={css["filter-box"]}>
      <p>Find contacts by name</p>
      <input
        className={css["filter-input"]}
        type="text"
        value={currentNameFilter}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
}
