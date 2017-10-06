import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
class Map extends Component {
  render() {
    return (
      <GoogleMap
    defaultZoom={4}
    defaultCenter = {this.props.loction}

  >

    <Marker
      position={{ lat: 32.1093337, lng: 30.109333 }}
    />
    <Marker
      position={{ lat: 31.1093337, lng: 30.109333 }}
    />
  </GoogleMap>
    );
  }
}

export default withGoogleMap(Map);
