import { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../../routes';
import Spinner from '../../../utils/Spinner';

const Cast = lazy(() =>
  import('../../Cast/Cast.js' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('../../Reviews/Reviews.js' /* webpackChunkName: "Reviews" */),
);

export default class Routers extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={routes.cast} component={Cast} />
          <Route path={routes.reviews} component={Reviews} />
        </Switch>
      </Suspense>
    );
  }
}