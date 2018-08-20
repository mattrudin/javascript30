import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import Cities from './util/Cities';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      match: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.displayMatches = this.displayMatches.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  findMatches(wordToMatch, cities) {
    return cities.filter(place => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex);
    });
  }

  numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  displayMatches() {
    const matchArray = this.findMatches(this.state.value, Cities);
    this.setState({
      match: matchArray
    });
  }

  render() {
    return (
      <div className="App">
        <SearchForm 
          value={this.state.value} 
          onChange={this.handleChange}
          match={this.state.match} />
      </div>
    );
  }
}

export default App;