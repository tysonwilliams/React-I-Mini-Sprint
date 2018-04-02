// Import React from react.
import React from 'react';
import Component from 'react';
import { render } from 'react-dom';

class MoviesList extends Component {
  state = {
    movies: [
      {
        id: 1,
        title: "Jumanji"
      },
      {
        id: 2,
        title: "Avengers: Infinity War"
      },
      {
        id: 3,
        title: "Solo: A Star Wars Story"
      },
      {
        id: 4,
        title: "Ready Player One"
      },
    ],
  };

  render() {
    return (
      <div className="movies-list">

      </div>
    )
  }
}

// Outside the arrow function, export the function MoviesList as a default.
export default MoviesList;
