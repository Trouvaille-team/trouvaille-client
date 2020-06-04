import React from 'react';

let user_id = 1
export default class MyTrips extends React.Component {

  state = {
    trips: []
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_URL}/trips/${user_id}`).then((res) => {
      return res.json()
    }).then((data) => {
      this.setState({ trips: data })
    })
  }




  renderTrips(trips) {
    return trips.map((trip) => {

      return (
        <li>
          <h4>{trip.trip_id}</h4>
          <p>{trip.origin.lat},{trip.origin.lng} -> {trip.destination.lat},{trip.destination.lng}</p>
          <button
          // an onClick function to set the context to the value of this trip, and navigate to the map component
          ></button>
        </li>
      )
    })
  }

  render() {
    return (
      <ul>
        {this.renderTrips(this.state.trips)}
      </ul>
    )
  }
}