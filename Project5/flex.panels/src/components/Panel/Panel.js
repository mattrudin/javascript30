import React from 'react';
import './Panel.css';

const Panel = (props) => {
	const className = props.className; 
	const panelText = props.panelText;
	const keyNumber = props.keyNumber;
	return(
		<div className={className}>
		  {panelText.map((text, num) => <p 	className={keyNumber}
		  									key={num} 
		  									onClick={props.click}>{text}</p>)}
		</div>
	);
};

export default Panel;