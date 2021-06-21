import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { homePageFetchMovies } from '../../API/MovieApi';
import PropTypes from 'prop-types';
import MovieList from '../MovieList/MovieList';
import Spinner from '../../utils/Spinner';

class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null,
  };
  async componentDidMount() {
    this.onGetMovies();
  }
  onGetMovies = async () => {
    this.setState({ isLoading: true });
    try {
      const results = await homePageFetchMovies();
      const movies = results.map(({ id, original_title }) => ({
        id,
        original_title,
      }));
      this.setState({ movies });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { movies, isLoading, error } = this.state;
    const { location } = this.props;
    return (
      <>
        <h2>Trending today</h2>
        {error && <h2 style={{ color: 'red' }}>{error}</h2>}
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <MovieList array={movies} location={location} />
          </>
        )}
      </>
    );
  }
}

HomePage.propsTypes = {
  location: PropTypes.string,
};
export default withRouter(HomePage);