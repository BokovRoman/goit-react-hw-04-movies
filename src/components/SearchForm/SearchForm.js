import { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  state = {
    query: '',
  };

  onChangeStateQuery = ({ currentTarget }) => {
    const { value } = currentTarget;
    this.setState({ query: value });
  };
  onFormSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    if (!query) {
      return;
    }
    this.props.onSubmitSearchForm(query);
  };
  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.onFormSubmit} data-netlify="true">
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          onChange={this.onChangeStateQuery}
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmitSearchForm: PropTypes.func,
};

export default SearchForm;
