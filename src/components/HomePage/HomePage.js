import { Component } from 'react';
import { homePageFetchMovies } from '../../API/MovieApi';

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
    
    return (
      <>
        <h2>Trending today</h2>
      </>
    );
  }
}

export default HomePage;