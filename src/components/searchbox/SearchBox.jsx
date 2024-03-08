import React from 'react'
import css from "./SearchBox.module.css"

const SearchBox = ({ searchTerm, onSearch }) => {
  return (
      <div>
          <p className={css.paragraf}>Find contacts by name</p>
          <input className={css.searchname} type="text" value={searchTerm} onChange={onSearch} />
    </div>
  )
}

export default SearchBox