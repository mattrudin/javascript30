import React from 'react';
import './Panels.css';
import Panel from '../Panel/Panel';

const Panels = (props) => {
	const panelInfo = props.panelInfo;
	return(
		<div className="panels">
			{panelInfo.map((panel) => <Panel 	onClick={props.handleClick}
												className={`${panel.panelName} ${panel.open ? 'open' : ''} ${panel.openActive ? 'open-active' : ''}`}
												key={panel.id} 
												panelText={panel.panelText}
												 />)}
	    </div>
	);
};

export default Panels;