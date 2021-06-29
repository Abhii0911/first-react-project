import React from 'react';
import './search-box.styles.css'

//Functional Component
export const SearchBox = ( {placeholder, handleChange }) => (
    <div>
        <label>Search Monsters: </label>
        <input className="search" type="search" placeholder={placeholder} onChange={handleChange } />
    </div>
)