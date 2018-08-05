import React from 'react';
import './KeyList.css';
import Key from '../Key/Key';

class KeyList extends React.Component {

	createKeys() {
		let keysArray = [];
		const keycodes = [65,83,68,70,71,72,74,75,76]
		const keys = ['A','S','D','F','G','H','J','K','L'];
		const instruments = ['clap', 'hihat', 'kick', 'openhat', 'boom', 'ride', 'snare', 'tom', 'tink'];
		for(let i = 0; i < keycodes.length; i++) {
				keysArray.push(<Key keycode ={keycodes[i]} 
									keys={keys[i]} 
									instrument={instruments[i]} 
									isPlaying={this.props.isPlaying} />) 
		}
		return keysArray;
	}

	render() {
		return(
			<div className="keys">
				{this.createKeys()}
  			</div>
		)
	}
}

export default KeyList;