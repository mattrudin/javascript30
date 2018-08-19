import React from 'react';
import './Panel.css';

const Panel = (props) => { 
	const panelText = props.panelText;
	const className = props.className;
	return(
		<div className={className}>
		  {panelText.map((text, index) => <p>{text}</p>)}
		</div>
	);
};

export default Panel;