import React from 'react';
import './Panels.css';
import Panel from '../Panel/Panel';

class Panels extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			panelNames: [`panel panel1`,`panel panel2`,`panel panel3`,`panel panel4`,`panel panel5`],
			panelText: [[`Hey`, `Let's`, `Dance`], [`Give`,`Take`,`Receive`], [`Experience`,`It`,`Today`], [`Give`,`All`,`You can`], [`Life`,`In`,`Motion`]]
		};
	}
	render() {
		return(
			<div className="panels">
				{this.state.panelNames.map((index, num) => <Panel className={index} panelText={this.state.panelText[num]}/>)}
			</div>
		);
	}
}

export default Panels;