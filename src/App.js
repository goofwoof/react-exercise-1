import React, { Component } from 'react';
import Top from './components/top/Top';
import Bottom from './components/bottom/Bottom'
import './App.scss';

class App extends Component {
  render() {
    return <div className="app">
      <Top/>
      <Bottom/>
      </div>;
  }
}

export default App;
