import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddEvent extends Component{
  constructor(){
    super();
    this.state = {
      types:[]
    }
  }

  onSubmit(){
    return 1;
  }

  componentWillMount(){
    this.getTypes();
  }

  getTypes(){
    axios.get("http://localhost:3001/api/typeOfEvents/")
      .then(response => {
        this.setState({types: response.data}, () => {
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
        <h1>Add Event</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <label htmlFor="description">Description</label>
            <input type="text" name="description" ref="description" />
            <br />
            <label htmlFor="typeOfEvent">Type Of Event</label>
            <select name="typeOfEvent" ref="typeOfEvent">
              <option value="robo">Robo / Asalto</option>
              <option value="asesinato">Asesinato</option>
            </select>
            <br />
            <label htmlFor="date">Date</label>
            <input type="date" name="date" ref="date" />
            <br />  
            <input type="submit" />

          </div>
        </form>
      </div>
    )
  }
}

export default AddEvent;
