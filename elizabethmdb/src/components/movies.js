import React, { Component } from 'react';

import Movie from './movie';

export default class Movies extends Component {

  render() {
    var movies = this.props.movies;
    return (
      <div>
        {movies.map((movie, id) => {
          return <Movie key={id} movie={movie} />;
        })}
      </div>
    );
  }
}
