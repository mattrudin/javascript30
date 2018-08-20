import React from 'react';
import './Suggestions.css';

const Suggestions = (props) => {
	const matchArray = props.match;
	const Placeholder= () => {
		return(
			<div>
				<li>Filter for a city</li>
			    <li>or a state</li>
		    </div>
		)
	}

	const Matches = () => {
		matchArray.map(place => {
	      const regex = new RegExp(this.state.value, 'gi');
	      const cityName = place.city.replace(regex, 
	        `<span class="hl">${this.state.value}</span>`);
	      const stateName = place.state.replace(regex, 
	        `<span class="hl">${this.state.value}</span>`);
	      return(
	        <div>
	          <li>
	            <span class="name">{cityName}, {stateName}</span>
	            <span class="population">{this.numberWithCommas(place.population)}</span>
	          </li>
	        </div>
	        );
		});
	}

	return(
		<div className="suggestions">
	    	<ul className="suggestions">
		      <Matches/> 
		    </ul>
	    </div>
	);
};

export default Suggestions;