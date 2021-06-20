import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage  from './views/HomePage';

const App = () => (
  <>
    <Switch>
    <Route path="/" exact component={HomePage} />
    {/* <Route path="/movies" component={MoviesPage} />
    <Route path="/movies/:movieId" component={MovieDetailsPage} />
    <Route path="/movies/:movieId/cast" component={Cast} />
    <Route path="/movies/:movieId/reviews" component={Reviews} /> */}
    </Switch> 
  </>
);

export default App;
