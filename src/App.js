import React from 'react';
import { Route } from 'react-router-dom';

const App = () => (
  <>
    <Route path="/" exact component={HomePage} />
    <Route path="/movies" component={MoviesPage} />
    <Route path="/movies/:movieId" component={MovieDetailsPage} />
    <Route path="/movies/:movieId/cast" component={Cast} />
    <Route path="/movies/:movieId/reviews" component={Reviews} />
  </>
);

export default App;
