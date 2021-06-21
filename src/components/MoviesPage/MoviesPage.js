import { Component } from 'react';
import { submitFetchMovies } from '../../API/MovieApi';
import routes from '../../routes';
import Spinner from '../../utils/Spinner';
import PropTypes from 'prop-types';
import MovieList from '../MovieList/MovieList';
import SearchForm from '../SearchForm/SearchForm';

class MoviesPage extends Component {
  state = {
    results: [],
    isLoading: false,
    error: null,
  };
  componentDidMount() {
    const result = localStorage.getItem('results');
    let parseResults = JSON.parse(result);
    if (!parseResults) {
      parseResults = [];
    }
    this.setState({ results: parseResults });
  }

  onSubmitSearchForm = async query => {
    this.setState({ isLoading: true });

    try {
      const response = await submitFetchMovies(query);
      const results = response.map(({ id, original_title }) => ({
        id,
        original_title,
      }));
      this.setState({ results });
      localStorage.setItem('results', JSON.stringify(results));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
      this.props.history.push(`${routes.movies}?query=${query}`);
    }
  };

  render() {
    const { results, error, isLoading } = this.state;
    const { location } = this.props;
    return (
      <>
        <SearchForm onSubmitSearchForm={this.onSubmitSearchForm} />
        {error && <h2 style={{ color: 'red' }}>{error}</h2>}
        {isLoading ? (
          <Spinner />
        ) : (
          <MovieList array={results} location={location} />
        )}
      </>
    );
  }
}

MoviesPage.propTypes = {
  location: PropTypes.object,
};

export default MoviesPage;