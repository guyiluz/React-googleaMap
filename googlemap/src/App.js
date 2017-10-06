import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map';

class App extends Component {
  render() {
    return (
      <div className="App">
 <h1>This is GmAP</h1>
 <Map
 isMarkerShown
 googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
 loadingElement={<div style={{ height: `100%` }} />}
 containerElement={<div style={{ height: `400px` }} />}
 mapElement={<div style={{ height: `100%` }} />}
 loction={{ lat: 32.109333, lng: 34.855499}}

 />
      </div>
     
    );
  }
}

export default App;
