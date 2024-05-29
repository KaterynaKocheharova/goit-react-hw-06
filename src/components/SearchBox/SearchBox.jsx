import css from "./SearchBox.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css["filter-box"]}>
      <p>Find contacts by name</p>
      <input
        className={css["filter-input"]}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}
