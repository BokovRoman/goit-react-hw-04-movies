import { Component } from 'react';
import routes from '../../routes';
import { detailsFetchMovies } from '../../API/MovieApi';
import PropTypes from 'prop-types';
import Spinner from '../../utils/Spinner';
import Description from './Description/Description';
import Genres from './Genres/Genres';
import Links from './Links/Links';
import RoutersDetails from './RoutersDetails/RoutersDetails';
// import './MovieDetails.css';

class MovieDetailsPage extends Component {
  state = {
    details: {},
    genres: [],
    isLoading: false,
    error: null,
  };
  async componentDidMount() {
    this.onGetMoviesById();
  }
  onGetMoviesById = async () => {
    this.setState({ isLoading: true });
    try {
      const { movieId } = this.props.match.params;
      const response = await detailsFetchMovies(movieId);
      const { genres, original_title, poster_path, overview } = response;

      this.setState({
        details: { original_title, poster_path, overview },
        genres,
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    return history.push(routes.home);
  };
  render() {
    const { details, genres, error, isLoading } = this.state;
    const {
      match: { url },
      location: {
        state: { from },
      },
    } = this.props;

    return (
      <>
        {error && <h2 style={{ color: 'red' }}>{error}</h2>}
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <button
              className="button-back"
              type="button"
              onClick={this.handleGoBack}
            >
              Go back
            </button>
            <Description details={details} />
            <Genres genres={genres} />
            <Links url={url} location={from} />
            <RoutersDetails />
          </>
        )}
      </>
    );
  }
}
MovieDetailsPage.propTypes = {
  movieId: PropTypes.number,
  url: PropTypes.string,
  location: PropTypes.object,
  history: PropTypes.object,
};

export default MovieDetailsPage;