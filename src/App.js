import React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import routes from './routes';
import Spinner from './utils/Spinner';

const HomePage = lazy(() =>
  import(
    './components/HomePage/HomePage.js' /* webpackChunkName: "HomePage" */
  ),
);
const MoviesPage = lazy(() =>
  import(
    './components/MoviesPage/MoviesPage.js' /* webpackChunkName: "MoviesPage" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage/MovieDetailsPage.js' /* webpackChunkName: "MovieDetailsPage" */
  ),
);

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.moviesDetails} component={MovieDetailsPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;