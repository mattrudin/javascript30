import React, { Component } from 'react';
import './App.css';
import SearchInput from './components/SearchInput/SearchInput';
import Suggestions from './components/Suggestions/Suggestions';
import { Cities } from './util/Cities';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      matchArray: []
    }

    this.handleInput = this.handleInput.bind(this);
    this.findMatches = this.findMatches.bind(this);
    this.displayMatches = this.displayMatches.bind(this);
  }

  handleInput(event) {
    this.setState({
      searchInput: event.target.value
    });
  }

  findMatches = (wordToMatch, cities) => {
    return cities.filter(place => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex);
    });
  }

  //The following method is not yet implemented
  numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  displayMatches() {
    const matchArray = this.findMatches(this.state.searchInput, Cities);
    this.setState({
      matchArray: matchArray
    })
  }
  
  render() {
    return (
      <form className="search-form" onKeyUp={this.displayMatches} >
        <SearchInput 
          input={this.handleInput}  />
        <Suggestions 
          matchArray={this.state.matchArray}
          searchInput={this.state.searchInput}
          numberWithCommas={this.numberWithCommas} />
      </form>
    );
  }
}

export default App;