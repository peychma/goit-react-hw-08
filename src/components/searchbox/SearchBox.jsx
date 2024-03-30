import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
    console.log(111);
  };

  return (
    <div>
      <p className={css.paragraf}>Find contacts by name</p>
      <input 
        className={css.searchname} 
        type="text" 
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
