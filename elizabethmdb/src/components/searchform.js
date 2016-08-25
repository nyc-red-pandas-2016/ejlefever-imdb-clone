import React, { Component } from 'react';

export default class SearchForm extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var that = this;
    var title = this.refs.movieTitleText.value
    var url = "http://www.omdbapi.com/?s=" + title
    fetch(url, {
      method: "get"
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      that.refs.movieTitleText.value = "";
      that.props.updateResults(json.Search);
    });
  }

  render() {
    return (
      <section id="form">
        <form id="move-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="movieTitleText" name="movie-title" placeholder="movie title"></input><br/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </section>
    );
  }
}
