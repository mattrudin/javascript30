import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import Cities from './util/Cities';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.displayMatches = this.displayMatches.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      html: ''
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
    const html = matchArray.map(place => {
      const regex = new RegExp(this.state.value, 'gi');
      const cityName = place.city.replace(regex, 
        `<span class="hl">${this.state.value}</span>`);
      const stateName = place.state.replace(regex, 
        `<span class="hl">${this.state.value}</span>`);
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${this.numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join('');
    this.setState({
      html: html
    });
  }

  render() {
    return (
      <div className="App">
        <SearchForm 
          value={this.state.value} 
          onChange={this.handleChange}
          html={this.state.html} />
      </div>
    );
  }
}

export default App;