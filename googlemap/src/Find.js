import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'

import './App.css';

class Find extends Component {
constructor(){
super()
this.state= {

  city:""
}

 

}


hanelCahge= (e)=>{
  this.setState({
    city:e.target.value
  })
  this.props.handelOfset(this.state.city)
}


  handleSubmit =(e)=>{
    e.preventDefault();
    console.log('A name was submitted: ' + this.state.city);
    this.props.findcit(this.state.city)
  }

  render() {
    return (
  
      <form onSubmit={this.handleSubmit}>
<Input type="number" onChange={this.hanelCahge}    value={this.state.city} icon='search' placeholder='Search...' />
<Input type="submit"/>
</form>
    );
  }
}

export default Find;
