import React from 'react';
import './App.css';
import Panels from './components/Panels/Panels';

class App extends React.Component {
  	constructor(props) {
		super(props);
		this.state = { panels: [
			{ id: 'aldjf', panelName: 'panel panel1', panelText: [`Hey`,`Let's`,`Dance`], 		open: false, openActive: false},
			{ id: 'jlkjl', panelName: 'panel panel2', panelText: [`Give`,`Take`,`Receive`], 	open: false, openActive: false},
			{ id: 'ipoip', panelName: 'panel panel3', panelText: [`Experience`,`It`,`Today`], 	open: false, openActive: false},
			{ id: 'qweqe', panelName: 'panel panel4', panelText: [`Give`,`All`,`You can`], 		open: false, openActive: false},
			{ id: 'erter', panelName: 'panel panel5', panelText: [`Life`,`In`,`Motion`], 		open: false, openActive: false}
			]
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		console.log(event);
	}

	render() {
		return (
			<div className="App">
				<Panels handleClick={this.handleClick}
						panelInfo={this.state.panels} />
			</div>
		);
  	}
}

export default App;
