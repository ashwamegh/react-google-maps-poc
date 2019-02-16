import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMapComponent from './components/googlemap/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main>
          <section>
          <h2 className="section-header">Simple Google map with Marker and Circle</h2>
          <div className="section-content">
          <GoogleMapComponent 
            isCircleShown
            isMarkerShown
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GMAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          ></GoogleMapComponent>
          </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
