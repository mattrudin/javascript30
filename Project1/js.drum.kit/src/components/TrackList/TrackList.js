import React from 'react';
import PropTypes from 'prop-types';
import './TrackList.css';
import Track from '../Track/Track';

// Component is stateless, therefore no class needed

const TrackList = (props) => {
	const dataKey = props.dataKey;
	const letter = props.letter;
	const sound = props.sound;
	const isPlaying = props.isPlaying;
	const trackItems = dataKey.map((number, index) => {
		return <Track 	key={number}
						dataKey={number}
						letter={letter[index]}
						sound={sound[index]}
						isPlaying={isPlaying} />
	})
	return (
		<div className="keys">
			{trackItems}
		</div>
	);
};

TrackList.propTypes = {
  dataKey: PropTypes.array.isRequired,
  letter: PropTypes.array.isRequired,
  sound: PropTypes.array.isRequired
};

export default TrackList;