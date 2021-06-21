import { Component } from 'react';
import { castFetchMovies } from '../../API/MovieApi';
import PropTypes from 'prop-types';
import Spinner from '../../utils/Spinner';
import routes from '../../routes';
// import Scroll from '../../utils/Scroll';
// import './Cast.css';

class Cast extends Component {
  state = {
    cast: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.onGetMoviesCast();
  }
  onGetMoviesCast = async () => {
    const { movieId } = this.props.match.params;
    this.setState({ isLoading: true });
    try {
      const response = await castFetchMovies(movieId);
      const cast = response.map(({ id, original_name, profile_path }) => ({
        id,
        original_name,
        profile_path,
      }));
      this.setState({ cast });
    //   Scroll();
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { cast, error, isLoading } = this.state;

    return (
      <>
        {error && <h2 style={{ color: 'red' }}>{error}</h2>}
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="cast__list">
            {cast.length > 0
              ? cast.map(({ id, original_name, profile_path }) => {
                  return (
                    <div key={id}>
                      <p>{original_name}</p>
                      <img
                        src={profile_path && `${routes.image}${profile_path}`}
                        alt={original_name}
                        width="200"
                        height="300"
                      />
                    </div>
                  );
                })
              : 'No Cast'}
          </div>
        )}
      </>
    );
  }
}

Cast.propTypes = {
  movieId: PropTypes.number,
};

export default Cast;