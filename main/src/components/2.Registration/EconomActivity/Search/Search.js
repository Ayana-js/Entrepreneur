import React from 'react';
import './Search.css'

const Search = (props) => {
    return (
        <input
            onChange={({ target: { value } }) => props.search(value)}
            type="text"
            id="search"
            placeholder='Поиск'
            name="search"
        />
    );
};

export default Search;