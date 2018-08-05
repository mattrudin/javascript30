import React from 'react';
import './KeyList.css';
import Key from '../Key/Key';

class KeyList extends React.Component {
	render() {
		return(
			<div className="keys">
				<Key />
				<Key />
				<Key />
				<Key />
  			</div>
		)
	}
}

export default KeyList;