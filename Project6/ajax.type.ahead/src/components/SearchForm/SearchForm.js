import React from 'react';
import './SearchForm.css';
import SearchInput from './components/SearchInput/SearchInput';
import Suggestions from './components/Suggestions/Suggestions';

const SearchForm = (props) => {
	return(
		<div className="SearchForm">
	        <form class="search-form">
			    <SearchInput />
			    <Suggestions />
			</form>
	    </div>
	);
};

export default SearchForm;