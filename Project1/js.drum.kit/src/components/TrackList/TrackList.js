import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

// Component is stateless, therefore no class needed

const TrackList = (props) => {
	const dataKey = props.dataKey;
	const letter = props.letter;
	const sound = props.sound;
	const trackItems = dataKey.map((number, index) => {
		return <Track 	key={number}
						dataKey={number}
						letter={letter[index]}
						sound={sound[index]} />
	})
	return (
		<div className="keys">
			{trackItems}
		</div>
	);
};

export default TrackList;