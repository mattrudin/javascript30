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

	handleClick(event, id) {
		const panelIndex = this.state.panels.findIndex(panel => {
			return panel.id === id;
		}); //find the index with the id

		const panel = {
			...this.state.panels[panelIndex]
		}; //make a copy of the single panel

		const openBool = panel.open; //make a copy of the boolean
		const openActiveBool = panel.openActive; //make a copy of the boolean
		panel.open = !openBool; //change the boolean to the oposite
		panel.openActive = !openActiveBool; //change the boolean to the oposite

		const panels = [...this.state.panels]; //make a copy of all panels
		panels[panelIndex] = panel //replace the old panel with the new one

		this.setState( {panels: panels} ) //set the state to the new panels
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
