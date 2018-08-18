import React from 'react';
import './Panels.css';
import Panel from '../Panel/Panel';

const Panels = (props) => {
	const panelNames = props.panelNames;
	const panelText = props.panelText;
	const open = props.open;
	const openActive = props.openActive;
	return(
		<div className="panels">
			{panelNames.map((index, num) => <Panel 	onClick={props.onClick}
													className={`${index} ${open ? 'open' : ''} ${openActive ? 'open-active' : ''}`}
													key={num} 
													panelText={panelText[num]}
													 />)}
			<button onClick={props.onClick} >Click me</button>
	    </div>
	);
};

export default Panels;