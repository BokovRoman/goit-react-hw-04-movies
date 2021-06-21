import PropTypes from 'prop-types';

const Genres = ({ genres }) => {
  return genres.map(({ id, name }) => {
    return <p key={id}>{name}</p>;
  });
};
Genres.propTypes = {
  genres: PropTypes.array,
};

export default Genres;