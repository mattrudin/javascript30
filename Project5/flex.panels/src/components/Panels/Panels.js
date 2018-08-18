import React from 'react';
import './Panels.css';
import Panel from '../Panel/Panel';

const Panels = (props) => {
	const panelNames = props.panelNames;
	const panelText = props.panelText;
	return(
		<div className="panels">
			{panelNames.map((index, num) => <Panel 	onClick={props.onClick}
													className={index} 
													key={num} 
													panelText={panelText[num]} />)}
	    </div>
	);
};

export default Panels;