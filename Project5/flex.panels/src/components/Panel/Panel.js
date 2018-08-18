import React from 'react';
import './Panel.css';

const Panel = (props) => {
	const className = props.className; 
	const panelText = props.panelText
	return(
		<div className={className}>
		  {panelText.map((text, num) => <p key={num} >{text}</p>)}
		</div>
	);
};

export default Panel;