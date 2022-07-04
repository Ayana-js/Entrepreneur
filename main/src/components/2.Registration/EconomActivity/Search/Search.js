import React from 'react';
import search from '../../../../assests/search.svg'
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