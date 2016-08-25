import React, { Component } from 'react';

export default class Movie extends Component {

  render() {
    var movie = this.props.movie;

    return (
      <div>
        <h1>{movie.Title} ({movie.Year})</h1>
        <img src={movie.Poster} className="App-logo" alt="logo" />
      </div>
    );
  }
}
