import React from 'react';
import './SearchForm.css';
import SearchInput from '../SearchInput/SearchInput';
import Suggestions from '../Suggestions/Suggestions';

const SearchForm = (props) => {
	const value = props.value;
	const handleChange = props.handleChange;
	const match = props.match;
	return(
		<div className="SearchForm">
	        <form className="search-form">
			    <SearchInput 
			    	value={value}
			    	onChange={handleChange} />
			    <Suggestions
			    	match={match} />
			</form>
	    </div>
	);
};

export default SearchForm;