import React, { Component } from 'react';
import './App.css';

import SearchForm from './components/searchform';
import Movie from './components/movie';

class App extends Component {

  constructor() {
    super();
    this.state = {
      movie: null
    };
    this.updateResults = this.updateResults.bind(this);
  }

  updateResults(newMovie) {
    this.setState({movie: newMovie});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://www.ovais.me/wp-content/uploads/2015/02/emoji-150x150.png" className="App-logo" alt="logo" />
          <h2>ElizabethMovieDatabase</h2>
        </div>
        <p className="App-intro">search for a movie:</p>
        <SearchForm updateResults={this.updateResults}/>
        <Movie movie={this.state.movie}/>
      </div>
    );
  }
}

export default App;
