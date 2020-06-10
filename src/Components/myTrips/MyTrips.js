import React from 'react';
import ContextProvider from '../../Context';
import config from "../../config"

export default class MyTrips extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      trips: []
    }
  }

  static contextType = ContextProvider

  componentDidMount() {
    if (localStorage.getItem("user_id")) {
      fetch(`${config.API_ENDPOINT}/trips/${sessionStorage.getItem("user_id")}`).then((res) => {
        return res.json()
      }).then((data) => {
        this.setState({ trips: data })
      })
    }
  }

  updateContext = (trip) => {
    console.log("clicked")
    this.context.setEndCoords(trip.destination)
    this.context.setOriginCoords(trip.origin)
    this.context.setWaypoints(trip.waypoints)
    this.context.setTrip(null, null, null, null)
    this.props.history.push("/map")
  }


  renderTrips(trips) {
    if (typeof (trips) === "array") {
      return trips.map((trip) => {

        return (
          <li>
            <h4>your trip to {trip.destination_name}</h4>
            <button
              onClick={() => this.updateContext(trip)}
            // an onClick function to set the context to the value of this trip, and navigate to the map component
            >Go To</button>
          </li>
        )
      })
    } else { console.log(trips) 
    return (
      <h2>Looks like we couldn't find any of your trips. Either Something went wrong on out end or you havent made any yet.</h2>
    ) }

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