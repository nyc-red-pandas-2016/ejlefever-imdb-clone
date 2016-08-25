import React, { Component } from 'react';

export default class Movie extends Component {

  render() {
    var movie = this.props.movie;

    // function getTitle() {
    //   if (movie != null) {
    //     return movie.Title;
    //   } else {
    //     return "No movie to show";
    //   }
    // }
    //
    // function getYear() {
    //   if (movie != null) {
    //     return " (" + movie.Year + ")";
    //   } else {
    //     return "";
    //   }
    // }
    //
    // function getPosterURL() {
    //   if (movie != null) {
    //     return  movie.Poster;
    //   } else {
    //     return "http://emojipedia-us.s3.amazonaws.com/cache/bc/6f/bc6f71bfca5a45797cea82ac6f6b9864.png";
    //   }
    // }

    return (
      <div>
        <h1>{movie.Title} ({movie.Year})</h1>
        <img src={movie.Poster} className="App-logo" alt="logo" />
      </div>
    );
  }
}
