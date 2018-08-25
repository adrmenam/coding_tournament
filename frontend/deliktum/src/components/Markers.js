import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const CustomMarker = ({ text }) => (
  <div style={{
    color: 'white',
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

class Marker extends Component{
constructor(props){
  super(props);
  this.state = {
    item:props.item
  }
}

  render(){
    return (
      <CustomMarker
        lat={-0.176838}
        lng={-78.478012}
        text={'Robo'}
      />
    )
  }
}

export default Marker;
