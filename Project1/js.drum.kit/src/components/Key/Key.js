import React from 'react';
import './Key.css';

class Key extends React.Component {
	render() {
		return(
			<div data-key="74" className="key">
		      <kbd>J</kbd>
		      <span className="sound">snare</span>
		    </div>
		)
	}
}

export default Key;