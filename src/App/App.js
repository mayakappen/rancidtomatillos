import React, { Component } from 'react';
import AllMovies from '../All-Movies/All-Movies';
import movieData from '../movieData';

class App extends Component {
  constructor() {
    super();
    this.state = {
    movies: movieData.movies
    }
  }
render() {
  return (
    <div className="App">
      <AllMovies movies={this.state.movies}/>
    </div>

  );
}
}

export default App;