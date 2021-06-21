import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Links = ({ url, location }) => {
  return (
    <ul>
      <li>
        <Link
          to={{
            pathname: `${url}/cast`,
            state: { from: location },
          }}
        >
          Cast
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: `${url}/reviews`,
            state: { from: location },
          }}
        >
          Reviews
        </Link>
      </li>
    </ul>
  );
};

Links.propTypes = {
  url: PropTypes.string,
};

export default Links;