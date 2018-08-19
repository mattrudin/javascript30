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
			{panelNames.map((index, num) => <Panel 	click={props.click}
													className={`${index} 
																${open ? 'open' : null} 
																${openActive ? 'open-active' : null}`}
													key={num} 
													keyNumber={num}
													panelText={panelText[num]}
													 />)}
	    </div>
	);
};

export default Panels;