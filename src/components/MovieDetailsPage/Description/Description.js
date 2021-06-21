import routes from '../../../routes';
import PropTypes from 'prop-types';

const Description = ({
  details: { original_title, poster_path, overview },
}) => {
  return (
    <>
      <h2>{original_title}</h2>

      <img
        src={poster_path && `${routes.image}${poster_path}`}
        alt={original_title}
        width="300"
        height="400"
      />

      <p>{overview}</p>
    </>
  );
};
Description.propTypes = {
  details: PropTypes.shape({
    original_title: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
  }),
};

export default Description;