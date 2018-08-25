import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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

class Map extends Component {
  constructor(props){
    super(props);
    // console.log(this.props);
  }

  static defaultProps = {
    center: {lat: -0.176838, lng: -78.478012},
    zoom: 16
  };

  // componentDidMount(){
  //   console.log(this.props.events);
  //   this.setState({events: this.props.events});
  // }

  render() {

        console.log(this.props);
        //
        if(this.props.events!=undefined){
          const eventMarkers = this.props.events.map((event, index)=>{


              return(

                <CustomMarker key={event.id} lat={event.location.lat} lng={event.location.lng} text={event.description} />

              )
          })




          console.log("si vale");

        return (

            <GoogleMapReact
             defaultCenter={this.props.center}
             defaultZoom={this.props.zoom}
           >
            {eventMarkers}


           </GoogleMapReact>


        )

      }else{
        console.log("no vale");
        return(
        <GoogleMapReact
         defaultCenter={this.props.center}
         defaultZoom={this.props.zoom}
       >


       </GoogleMapReact>
        )
      }


  }
}




export default Map;
