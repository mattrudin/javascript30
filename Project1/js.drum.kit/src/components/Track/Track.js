import React from 'react';
import './Track.css';

// Component is stateless, therefore no class needed

const Track = (props) => {
	return (
		<div data-key="65" class="key">
		  <kbd>A</kbd>
		  <span class="sound">clap</span>
		</div>
	);
};

export default Track;