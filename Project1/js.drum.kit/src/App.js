import React from 'react';
import './App.css';
import TrackList from './components/TrackList/TrackList';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dataKey: [65, 83, 68, 70, 71, 72, 74, 75, 76],
      letter: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      sound: ['clap', 'hihat', 'kick', 'openhat', 'boom', 'ride', 'snare', 'tom', 'tink'],
      isPlaying: false,
      keyCode: ''
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    this.setState({
      isPlaying: true,
      keyCode: e.keyCode
    });
    setTimeout(this.handleToggle, 70);
  }

  handleToggle() {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying
    }));
  }

  render() {
    return(
      <TrackList  dataKey={this.state.dataKey} 
                  letter={this.state.letter} 
                  sound={this.state.sound}
                  isPlaying={this.state.isPlaying}
                  keyCode={this.state.keyCode} />
    );
  }
}

export default App;