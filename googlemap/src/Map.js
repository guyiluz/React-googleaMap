/*global google*/
import React, { Component, } from 'react';
import style from "./style"
import { withScriptjs, withGoogleMap, GoogleMap, Marker,Polyline, icon, Google,} from "react-google-maps"


const  Map = withScriptjs(withGoogleMap((props) =>

      <GoogleMap
    defaultZoom={10}
    defaultCenter={new google.maps.LatLng(-34.397, 150.644)}
    center = {props.loction}
    defaultOptions={{ styles:style.styles}}
  >
  <Polyline   path={props.pagtline}
  geodesic={true} 

  
                      options={{ 
                                strokeColor: '#ff2527',
                                strokeWeight: 5,
                                icons: [{
			                          icon:{
  path: google.maps.SymbolPath.CIRCLE,
  scale: 8,
  strokeColor: '#6DC3EC'
} ,
			                             offset: props.offset+'%'
		}],
                          
                              }}
 />
  
    
  </GoogleMap>

))


export default (Map);
