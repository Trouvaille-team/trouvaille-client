import React from 'react';
import ContextProvider from '../../Context';
import config from "../../config"

let user_id = 1
export default class MyTrips extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    trips: []
  }
  static contextType = ContextProvider

  componentDidMount() {
    console.log(process.env.REACT_APP_URL)
    fetch(`${config.API_ENDPOINT}/trips/${user_id}`).then((res) => {
      return res.json()
    }).then((data) => {
      this.setState({ trips: data })
    })
  }

  updateContext = (trip) => {
    console.log("clicked")
    this.context.setEndCoords(trip.destination)
    this.context.setOriginCoords(trip.origin)
    this.context.setWaypoints(trip.waypoints)
    this.props.history.push("/map")
  }


  renderTrips(trips) {
    return trips.map((trip) => {

      return (
        <li>
          <h4>{trip.trip_id}</h4>
          <p>{trip.origin.lat},{trip.origin.lng} -> {trip.destination.lat},{trip.destination.lng}</p>
          <button
            onClick={() => this.updateContext(trip)}
          // an onClick function to set the context to the value of this trip, and navigate to the map component
          >Go To</button>
        </li>
      )
    })
  }

  render() {
    return (
      <>
        <h1>trips</h1>
        <ul>
          {this.renderTrips(this.state.trips)}
        </ul>
      </>
    )
  }
}