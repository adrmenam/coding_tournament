import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import EventItem from './EventItem';
import Map from './Map';

class Events extends Component{
  constructor(){
    super();
    this.state = {
      events:[]
    }
  }

  componentDidMount(){
    this.getEvents();
  }

  getEvents(){
    axios.get("http://localhost:3001/api/events")
      .then(response => {
        this.setState({events: response.data}, () => {
          // console.log(this.state);
        })
      })
      .catch(err=>console.log(err));
  }

  render(){
    const eventItems = this.state.events.map((event, i) => {
      return(
        <EventItem key={event.id} item={event} />
      )
    })

    console.log(this.state.events);

      return (
        <div>

          <h1>Events</h1>
          <ul className="collection">
            {eventItems}
          </ul>

          <Link className="btn" to="/events/add">New Event</Link>
          <br />
          <br />
          <Map events = {this.state.events}/>
        </div>
      )


  }
}

ReactDOM.render(
  <div style={{width: '100%', height: '500px'}}>
    <Map/>
  </div>,
  document.getElementById('main')
);

export default Events;
