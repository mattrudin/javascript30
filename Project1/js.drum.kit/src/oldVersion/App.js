import React, { Component } from 'react';
import './App.css';
import KeyList from './components/KeyList/KeyList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: 'key'
    };

    this.isPlaying = this.isPlaying.bind(this);
    this.playSound = this.playSound.bind(this);
    this.removeTransition = this.removeTransition.bind(this);
  }

  componentWillMount() {
    window.addEventListener('keydown', this.playSound);
  }

  isPlaying() {
    if(this.state.className === 'key') {
      this.setState({
      className: 'key-playing'
    });} else {
        this.setState({
          className: 'key'
        });
      }
  }

  playSound(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    //this.isPlaying();
    key.classList.add('playing');
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', this.removeTransition));  
  }

  removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    //this.isPlaying();
  }

  render() {
    return (
      <div className="App">
        
        <KeyList isPlaying={this.state.isPlaying} />

        <audio data-key="65" src="sounds/clap.wav"></audio>
        <audio data-key="83" src="sounds/hihat.wav"></audio>
        <audio data-key="68" src="sounds/kick.wav"></audio>
        <audio data-key="70" src="sounds/openhat.wav"></audio>
        <audio data-key="71" src="sounds/boom.wav"></audio>
        <audio data-key="72" src="sounds/ride.wav"></audio>
        <audio data-key="74" src="sounds/snare.wav"></audio>
        <audio data-key="75" src="sounds/tom.wav"></audio>
        <audio data-key="76" src="sounds/tink.wav"></audio>

      </div>
    );
  }
}

export default App;
