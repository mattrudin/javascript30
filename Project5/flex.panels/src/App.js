import React from 'react';
import './App.css';
import Panels from './components/Panels/Panels';

class App extends React.Component {
  	constructor(props) {
		super(props);
		this.state = {
			panelNames: [`panel panel1`,`panel panel2`,`panel panel3`,`panel panel4`,`panel panel5`],
			panelText: [[`Hey`, `Let's`, `Dance`], [`Give`,`Take`,`Receive`], [`Experience`,`It`,`Today`], [`Give`,`All`,`You can`], [`Life`,`In`,`Motion`]]
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log('hello');
	}

	render() {
		return (
			<div className="App">
				<Panels onClick={this.handleClick}
						panelNames={this.state.panelNames} 
						panelText={this.state.panelText} />
			</div>
		);
  	}
}

export default App;
