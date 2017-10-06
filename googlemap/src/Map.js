import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const  Map = withScriptjs(withGoogleMap((props) =>

      <GoogleMap
    defaultZoom={8}
    center = {props.loction}
  >
  <Marker
      position={props.
mar}
    />

  
    
  </GoogleMap>

))


export default (Map);
