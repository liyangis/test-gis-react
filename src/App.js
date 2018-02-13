import React, { Component } from 'react';
import logo from './logo.svg';
import Map from './components/Map';
import MapLegend from './components/MapLegend';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./images/jkyc_logo.png" className="App-logo" alt="logo" />
        </header>
        <Map></Map>
        <MapLegend/>
      </div>
    );
  }
}

export default App;
