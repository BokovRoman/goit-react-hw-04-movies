import { Component } from 'react';
import Loader from 'react-loader-spinner';

export default class Spinner extends Component {
  render() {
    return <Loader type="Rings" color="#00BFFF" height={100} width={100} />;
  }
}