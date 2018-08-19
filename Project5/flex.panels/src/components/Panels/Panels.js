import React from 'react';
import './Panels.css';
import Panel from '../Panel/Panel';

const Panels = (props) => {
	const panelInfo = props.panelInfo;
	const handleClick = props.handleClick;
	return(
		<div className="panels">
			{panelInfo.map((panel) => <Panel 	onClick={(event) => handleClick(event, panel.id)}
												className={`${panel.panelName} ${panel.open ? 'open' : ''} ${panel.openActive ? 'open-active' : ''}`}
												key={panel.id} 
												panelText={panel.panelText}
												 />)}
	    </div>
	);
};

export default Panels;