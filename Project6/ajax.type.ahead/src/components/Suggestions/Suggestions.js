import React from 'react';
import './Suggestions.css';

const Suggestions = (props) => {
	const matchArray = props.matchArray;
	const searchInput = props.searchInput;
	const regex = new RegExp(searchInput, 'gi');
	const match = matchArray.map(place => {
		const cityName = place.city.replace(regex,
			<span className="hl">{searchInput}</span>);
		const stateName = place.state.replace(regex,
			<span className="hl">{searchInput}</span>);
		return(
			<div key={`${place.city}${place.state}`}>
				<li>
					<span className="name">{place.city}, {place.state}</span>
					<span className="population">{place.population}</span>
				</li>
			</div>
		)	
	});

	const placeholder = (
		<div>
			<li>Filter for a city</li>
		    <li>or a state</li>
		</div>
	);

	return(
		<ul className="suggestions">
		    {searchInput ? match : placeholder}
	    </ul>
	);
};

export default Suggestions;

/*
	const match = matchArray.map(place => {
		const cityName = place.city.replace(regex,
			<span className="hl">{searchInput}</span>);
		const stateName = place.state.replace(regex,
			<span className="hl">{searchInput}</span>);
		return(
			<div className="suggestions" key={`${place.city}${place.state}`}>
				<ul className="suggestions">
					<span className="name">{cityName}, {stateName}</span>
					<span className="population">{place.population}</span>
				</ul>
			</div>
		)	
	});

*/