import React from 'react';
import './SearchInput.css';

const SearchInput = (props) => {
	return(
		<input 
			type="text" 
			className="search" 
			onChange={props.input} />
	);
};

export default SearchInput;