import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map';
import Find from './Find';



class App extends Component {
constructor(){
super()
this.state={
  location:{lat: 32.0852999, lng: 34.78176759999999},
   offset:0
}
  
}
handelOfset=(number)=>{
  this.setState({
    offset:number
  })

}

  findcit =(city)=>{
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyD9mbOueI353Xh6Aear6wNQ_Mt-DHpmZkc`)
.then((res)=>{
return res.json()
}).then((data)=>{
  this.setState({
    location:data.results["0"].geometry.location

  })



})

   

  }


  render() {
    const pathCoordinates=[ 
      {lat:36.05298765935, lng:-112.083756616339}, 
      {lat:36.2169884797185,lng: -112.056727493181}, 
    ] 

    const lineSymbol = {
      path: 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
      fillColor: '#0000FF',
      fillOpacity: 0.6,
      strokeWeight: 1,
      scale: 1,
     };
    return (
      <div className="App">
        
 <h1>This is GmAP</h1>
 <Find findcit={this.findcit}  handelOfset={this.handelOfset}/>
 <Map
 isMarkerShown
 withGoogleMap
 googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9mbOueI353Xh6Aear6wNQ_Mt-DHpmZkc&libraries=geometry,places,drawing"
 loadingElement={<div style={{ height: `100%` }} />}
 containerElement={<div className ="mapc" style={{ height: `400px` }} />}
 mapElement={<div style={{ height: `100%` }} />}
loction ={{lat:36.05298765935, lng:-112.083756616339}}
 mar={this.state.location}
 offset={this.state.offset}
 pagtline={pathCoordinates}
 lineSymbol={lineSymbol}

 

 />
      </div>
     
    );
  }
}

export default App;
