import React from 'react';
import './Suggestions.css';

//may use highlighter for highlighting the search text? https://github.com/bvaughn/react-highlight-words

const Suggestions = (props) => {
	const matchArray = props.matchArray;
	const searchInput = props.searchInput;
	const numberWithCommas = props.numberWithCommas;
	const regex = new RegExp(searchInput, 'gi');
	const match = matchArray.map(place => {
		const cityName = place.city.replace(regex, searchInput);
		const stateName = place.state.replace(regex, searchInput);
		return(
				<li key={`${place.city}${place.state}`}>
					<span className="name"><span className="hl">{cityName}</span>, <span className="hl">{stateName}</span></span>
					<span className="population">{numberWithCommas(place.population)}</span>
				</li>
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