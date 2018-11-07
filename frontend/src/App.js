import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './App.css';
import ScrollContainer from './components/Scroll/ScrollContainer';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div style={{ position:'absolute', top: 0, bottom: 0, left: 0, right: 0 }} >
        <Header />
        <ScrollContainer />
      </div>
    );
  }
}

export default App;
