import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EventDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      details: ''
    }
  }

  componentWillMount(){
    this.getEvent();
  }

  getEvent(){
    let eventId = this.props.match.params.id;
    axios.get(`http://localhost:3001/api/events/${eventId}`)
      .then(response => {
        this.setState({details: response.data}, () => {
          console.log(this.state);
        })
      })
      .catch(err=>console.log(err));
  }

  render(){
    return (
      <div>
      <br />
      <Link className="btn" to="/">Back</Link>
        <h1>{this.state.details.description}</h1>
        <ul className="collection">
          <li className="collection-item">Tipo de evento: {this.state.details.typeOfEvent}</li>
          <li className="collection-item">Fecha y Hora: {this.state.details.date}</li>
        </ul>
      </div>
    )
  }
}



export default EventDetails;
