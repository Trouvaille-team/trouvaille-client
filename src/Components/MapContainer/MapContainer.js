import {Component} from "react";
import React from 'react';


import Map from "../Map/Map";

class MapContainer extends Component {
  constructor(props) {
    super(props);
  }
      waypoints = [
      {
        location: "Grand Canyon",
        stopover: false,
      },
    ];
  render() {

    return (
      <>
        <Map
          isMarkerShown
          originLat={40.689495}
          originLng={-73.90796}
          destLat={34.038125}
          destLng={-118.473072}
          waypoints={this.waypoints}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <h3>your stops</h3>
        <ul>
          {this.waypoints.map((waypoint) => {
            return <li>{waypoint.location}</li>;
          })}
        </ul>
        <button onClick={() => this.props.history.push('/dashboard')}>Back to dashboard</button>
      </>
    );
  }
}

export default MapContainer;
