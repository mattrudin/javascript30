import React from 'react';
import './Suggestions.css';

const Suggestions = (props) => {
	const html = props.html;
	const Placeholder= () => {
		return(
			<div>
				<li>Filter for a city</li>
			    <li>or a state</li>
		    </div>
		)
	}

	return(
		<div className="suggestions">
	    	<ul className="suggestions">
		      {html ? html : <Placeholder/>}
		    </ul>
	    </div>
	);
};

export default Suggestions;