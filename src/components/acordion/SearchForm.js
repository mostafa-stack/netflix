import React from 'react';
import {SearchWrapper }from './styles/searchStyle'
const SearchForm = () => {
    return (
        <SearchWrapper>
            <div className="container">
            <input type="text" placeholder='search for movie'/>
            <button>start it now</button>
            </div>
            
            <small>Lorem ipsum dolor sit amet consectetur adipisicing.</small>
        </SearchWrapper>
    );
}

export default SearchForm;
