import React from 'react';
import './App.css';
import Panels from './components/Panels/Panels';

class App extends React.Component {
  	constructor(props) {
		super(props);
		this.state = {
			panelNames: [`panel panel1`,`panel panel2`,`panel panel3`,`panel panel4`,`panel panel5`],
			panelText: [[`Hey`, `Let's`, `Dance`], [`Give`,`Take`,`Receive`], [`Experience`,`It`,`Today`], [`Give`,`All`,`You can`], [`Life`,`In`,`Motion`]],
			open: false,
			openActive: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.setState(prevState => ({
			open: 		!prevState.open,
			openActive: !prevState.openActive
		}));
		console.log(event.currentTarget);
	}

	render() {
		return (
			<div className="App">
				<Panels click={this.handleClick}
						panelNames={this.state.panelNames} 
						panelText={this.state.panelText}
						open={this.state.open}
						openActive={this.state.openActive} />
			</div>
		);
  	}
}

export default App;
