import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map';
import Find from './Find';



class App extends Component {
constructor(){
super()
this.state={
  location:{lat: 32.0852999, lng: 34.78176759999999}

}
  
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
     
    return (
      <div className="App">
        
 <h1>This is GmAP</h1>
 <Find findcit={this.findcit}/>
 <Map
 isMarkerShown
 googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9mbOueI353Xh6Aear6wNQ_Mt-DHpmZkc&libraries=geometry,places"
 loadingElement={<div style={{ height: `100%` }} />}
 containerElement={<div style={{ height: `400px` }} />}
 mapElement={<div style={{ height: `100%` }} />}
loction ={this.state.location}
 mar={this.state.location}


 />
      </div>
     
    );
  }
}

export default App;
