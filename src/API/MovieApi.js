import axios from 'axios';

const API_KEY = '?api_key=c79ebc5a4bb0dc4a78ae7b9d9db9a8b5';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const homePageFetchMovies = () => {
  return axios
    .get(`trending/movie/day${API_KEY}`)
    .then(({ data: { results } }) => results);
};

export const detailsFetchMovies = id => {
  return axios
    .get(`movie/${id}${API_KEY}&language=en-US`)
    .then(({ data }) => data);
};

export const submitFetchMovies = searchQuery => {
  return axios
    .get(
      `search/movie${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`,
    )
    .then(({ data: { results } }) => results);
};

export const castFetchMovies = id => {
  return axios
    .get(`movie/${id}/credits${API_KEY}&language=en-US`)
    .then(({ data: { cast } }) => cast);
};

export const reviewsFetchMovies = id => {
  return axios
    .get(`movie/${id}/reviews${API_KEY}&language=en-US`)
    .then(({ data: { results } }) => results);
};