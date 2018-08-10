import React from 'react';
import './Track.css';

// Component is stateless, therefore no class needed

const Track = (props) => {
	const dataKey = props.dataKey;
	const letter = props.letter;
	const sound = props.sound;
	return (
		<div 	data-key={dataKey.toString()} 
				className="key">
		  <kbd>{letter}</kbd>
		  <span className="sound">{sound}</span>
		</div>
	);
};

export default Track;