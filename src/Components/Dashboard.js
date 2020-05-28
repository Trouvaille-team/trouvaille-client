import React from 'react';
import Menu from './Menu/Menu'
import ContextProvider from '../Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
//import {Link} from 'react-router-dom';
//import PlanTrip from './Nav/PlanTrip';

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      lng: 0,
      data: []
    };
  }


  componentDidMount() {
    let myVar = this;
    navigator.geolocation.getCurrentPosition(function (position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      myVar.setState({ lat: latitude, lng: longitude })
    })

  }
  //This is a stupid solution change if possible
  componentDidUpdate() {
    if (this.state.data.length === 0) {
      fetch("http://localhost:8000/api/waypoints/nearby", {
        method: "POST",
        body: JSON.stringify({
          lat: this.state.lat,
          lng: this.state.lng
        }),
        headers: {
          "Content-Length": 61,
          "Content-Type": "application/json; charset=utf-8"
        },
        credentials: "same-origin"
      }).then((res) => {
        return res.json()
      }).then((data) => {
        this.setState({ data })
      }).catch(function (error) {
        return error.message
      })
    }
  }


  // getUserLocation = () => {

  // }

  static contextType = ContextProvider



  render() {
    return (
      <div>
        <Menu />

        {/* <ul id="nav-ul">
            <li><Link to="/new-trip" component={PlanTrip}>Plan a new trip</Link></li>
            <li><Link to="">See where I've been</Link></li>
            <li><Link to="">Discover new places</Link></li>
            <li><Link to="">Change my preferences</Link></li>
        </ul> */}

        <div className='dashboard-container'>
          <h1>Welcome, User</h1>
          <h2>Nearby Locations</h2>
          <div className='new-places-container'>
            <h1>What do you think of these places?</h1>
            <div className='top-options'>
              {this.state.data.map((location) => {
                return (
                  <div className='option'>
                    <img alt={location.name}></img>
                    <div className='title-button-container'>
                      <button
                        className='add-button'
                      >
                        <FontAwesomeIcon
                          icon={faTimes}
                        />
                      </button>
                      <h2>{location.name}</h2>
                      <button
                        className='add-button'
                      >
                        <FontAwesomeIcon
                          icon={faPlus}
                        />
                      </button>
                    </div>
                  </div>)
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;