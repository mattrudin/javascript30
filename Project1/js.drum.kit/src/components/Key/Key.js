import React from 'react';
import './Key.css';

class Key extends React.Component {
	render() {
		return(
			<div data-key={this.props.keycode} className="key">
		      <kbd>{this.props.keys}</kbd>
		      <span className="sound">{this.props.instrument}</span>
		    </div>
		)
	}
}

export default Key;