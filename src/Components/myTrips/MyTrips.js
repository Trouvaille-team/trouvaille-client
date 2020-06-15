import React from 'react';
import ContextProvider from '../../Context';
import config from "../../config"
import Header from '../Header/Header';
import { Link } from 'react-router-dom'

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
      fetch(`${config.API_ENDPOINT}/trips/${localStorage.getItem("user_id")}`).then((res) => {
        if (res.status !== 200) {
          this.setState({ error: true })
          console.log(this.state)
        }
        return res.json()
      }).then((data) => {
        this.setState({ trips: data })
      })
    }
  }

  updateContext = (trip) => {
    this.context.setEndCoords(trip.destination)
    this.context.setOriginCoords(trip.origin)
    this.context.setWaypoints(trip.waypoints)
    this.context.setTrip(null, null, null, null)
    this.props.history.push("/map")
  }


  renderTrips(trips) {
    if (Array.isArray(trips) && trips.length > 1) {
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
    } else if (Array.isArray(trips)) {
      return (
        <h2>Looks like you havent made any trips yet</h2>)
    }

    else {
      return (
        <h2>Looks like something went wrong on our end sorry about that.</h2>
      )
    }

  }

  render() {
    if (this.state.error === true) {
      return (
        <>
          <h2>sorry it looks like something went wrong. Would you mind trying again?</h2>
          <Link to="/interests">try again here</Link>
        </>
      )
    } else {
      return (
        <>
          <Header />
          <h1>trips</h1>
          <ul>
            {this.renderTrips(this.state.trips)}
          </ul>
        </>
      )
    }
  }
}