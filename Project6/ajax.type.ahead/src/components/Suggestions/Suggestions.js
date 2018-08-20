import React from 'react';
import './Suggestions.css';


/*
 const html = matchArray.map(place => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(regex, 
        `<span class="hl">${this.value}</span>`);
      const stateName = place.state.replace(regex, 
        `<span class="hl">${this.value}</span>`);
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${this.numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join('');
*/

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
			<div className="suggestions">
				<ul className="suggestions">
					<span className="name">{cityName}, {stateName}</span>
					<span className="population">{place.population}</span>
				</ul>
			</div>
		)	
	});

	const placeholder = (
		<div className="suggestions">
			<ul className="suggestions">
				<li>Filter for a city</li>
			    <li>or a state</li>
		    </ul>
		</div>
	);

	return(
		<div >
		      {placeholder}
	    </div>
	);
};

export default Suggestions;