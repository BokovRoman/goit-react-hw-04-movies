import { Component } from 'react';
import { reviewsFetchMovies } from '../../API/MovieApi';
import PropTypes from 'prop-types';
// import Scroll from '../../utils/Scroll';
import Spinner from '../../utils/Spinner';

class Review extends Component {
  state = {
    review: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.onGetReview();
  }

  onGetReview = async () => {
    const { movieId } = this.props.match.params;
    this.setState({ isLoading: true });
    try {
      const response = await reviewsFetchMovies(movieId);
      const review = response.map(({ id, author, content }) => ({
        id,
        author,
        content,
      }));
      this.setState({ review });
    //   Scroll();
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { review, error, isLoading } = this.state;
    return (
      <>
        {error && <h2 style={{ color: 'red' }}>{error}</h2>}
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {' '}
            {review.length > 0
              ? review.map(({ id, author, content }) => {
                  return (
                    <div key={id}>
                      <h4>{author}</h4>
                      <p>{content}</p>
                    </div>
                  );
                })
              : 'No reviews'}
          </>
        )}
      </>
    );
  }
}

Review.propTypes = {
  movieId: PropTypes.number,
};

export default Review;