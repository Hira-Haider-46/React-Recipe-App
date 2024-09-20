import React from 'react';
import { CiSearch } from "react-icons/ci";
import './Search.css';

function Search() {
    return (
        <div className='search-wrapper'>
            <CiSearch className='search-icon' />
            <input type="text" placeholder='Search for a recipe' />
        </div>
    )
}

export default Search;