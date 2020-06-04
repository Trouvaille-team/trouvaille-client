import { Component } from "react";
import React from 'react';
import ContextProvider from '../../Context'
import TokenService from "../../services/token-service"
import Map from "../Map/Map";

class MapContainer extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    waypoints: []
  }


  static contextType = ContextProvider
  async componentDidMount() {
    this.handlePostTrips()
  }

  async handlePostTrips() {
    const token = TokenService.getAuthToken();

    const context = this.context

    const res = await fetch('http://localhost:8000/api/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        origin: context.originCoords,
        destination: context.endCoords,
        waypoints: context.waypoints,
        user_id: 1,
      }),
      credentials: "same-origin"
    }).then((res) => {
      return res.json()
    })
    .catch(() => {
      res.status(400).send();
    });
  }

  composeWaypointsString = () => {
    let waypointString = ""
    if (this.context.waypoints && this.context.waypoints.length > 0) {
      this.context.waypoints.forEach(waypoint => {
        waypointString += waypoint.name.replace(" ", "+")
        waypointString += "|"
      })
      return waypointString
    }
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
        <a
          href={`https://www.google.com/maps/dir/?api=1&origin=${this.context.originCoords.lat},${this.context.originCoords.lng}&destination=${this.context.endCoords.lat},${this.context.endCoords.lng}&travelmode=driving&waypoints=${this.composeWaypointsString()}`}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          see on google maps
    </a>
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
