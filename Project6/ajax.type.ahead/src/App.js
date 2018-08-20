import React, { Component } from 'react';
import './App.css';
import SearchInput from './components/SearchInput/SearchInput';
import Suggestions from './components/Suggestions/Suggestions';
import Cities from './util/Cities';


class App extends Component {
  state = {
    searchInput: '',
    matchArray: []
  }

  handleInput(event) {
    this.setState({
      searchInput: event.target.value
    })
  }

  //EXPERIMENTAL ON
  //The following method has to be in here
  findMatches = (wordToMatch, cities) => {
    return cities.filter(place => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex);
    });
  }

  //The following method has to be in here
  numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  //The following method has to be partly in here
  displayMatches() {
    const matchArray = this.findMatches(this.state.searchInput, Cities);
    this.setState({
      matchArray: matchArray
    })
  }


  //EXPERIMENTAL OFF
  
  render() {
    return (
      <form className="search-form">
        <SearchInput 
          input={(event) => {this.handleInput(event)}} />
        <Suggestions 
          matchArray={this.state.matchArray}
          searchInput={this.state.searchInput} />
      </form>
    );
  }
}

export default App;