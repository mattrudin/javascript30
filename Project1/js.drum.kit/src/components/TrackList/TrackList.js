import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

// Component is stateless, therefore no class needed

const TrackList = (props) => {
	return (
		<div class="keys">
			<Track />
			<Track />
		</div>
	);
};

export default TrackList;