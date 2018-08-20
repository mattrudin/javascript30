import React from 'react';
import './SearchInput.css';

const SearchInput = (props) => {
	const value = props.value;
	const handleChange = props.handleChange;
	return(
		<input 
			type="text" 
			className="search" 
			value={value}
			onChange={handleChange}
			placeholder="City or State" />
	);
};

export default SearchInput;