import React from 'react';
import PropTypes from 'prop-types';
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

Track.propTypes = {
  dataKey: PropTypes.number.isRequired,
  letter: PropTypes.string.isRequired,
  sound: PropTypes.string.isRequired
};

export default Track;