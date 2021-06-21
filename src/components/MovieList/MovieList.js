import { Link } from 'react-router-dom';
import routes from '../../routes';
import PropTypes from 'prop-types';

const MovieList = ({ array, location }) => {
  return (
    <ul>
      {array.length > 0 &&
        array.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link
                to={{
                  pathname: `${routes.movies}/${id}`,
                  state: { from: location },
                }}
              >
                {original_title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};
MovieList.propTypes = {
  array: PropTypes.array,
  location: PropTypes.object,
};

export default MovieList;