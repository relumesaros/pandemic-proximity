import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Router from './components/Router';
import 'globalStyles.css';

class App extends Component {
  render() {
    return <Router />;
  }
}

export default hot(App);
