import { Component } from "react";
import React from 'react';
import ContextProvider from '../../Context'

import Map from "../Map/Map";

class MapContainer extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    waypoints: []
  }
  static contextType = ContextProvider

  componentDidMount() {
    this.setState({
      waypoints: this.context.waypoints
    })
  }
  render() {
    return (
      <>
        <Map
          isMarkerShown
          originLat={this.context.originCoords.lat}
          originLng={this.context.originCoords.lng}
          destLat={this.context.endCoords.lat}
          destLng={this.context.endCoords.lng}
          waypoints={this.context.waypoints}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <h3>your stops</h3>
        <ul>
          {this.context.waypoints.map((waypoint) => {
            return <li>{waypoint.name}</li>;
          })}
        </ul>
        <button onClick={() => this.props.history.push('/dashboard')}>Back to dashboard</button>
      </>
    );
  }
}

export default MapContainer;
