import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import routes from './routes';
import Spinner from './utils/Spinner';

const App = () => (
  <>
    <Switch>
    <Route exact path={routes.home} component={HomePage} />
    {/* <Route path="/movies" component={MoviesPage} />
    <Route path="/movies/:movieId" component={MovieDetailsPage} />
    <Route path="/movies/:movieId/cast" component={Cast} />
    <Route path="/movies/:movieId/reviews" component={Reviews} /> */}
    </Switch> 
  </>
);

export default App;
