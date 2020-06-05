import React from 'react';
import ContextProvider from '../Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import HamburgerIcon from './HamburberIcon/HamburgerIcon';
import LoadingScreen from "./loading/loading";
import FadeIn from "react-fade-in";
//import {Link} from 'react-router-dom';
//import PlanTrip from './Nav/PlanTrip';

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      lng: 0,
      data: { points: [] },
      loading: true
    };
  }

  static contextType = ContextProvider

  componentDidMount() {
    let myVar = this;
    navigator.geolocation.getCurrentPosition(function (position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      myVar.context.setOriginCoords({ lat: myVar.state.lat, lng: myVar.state.lng })
      myVar.setState({ lat: latitude, lng: longitude, loading: false })

    })
  }
  //This is a stupid solution change if possible
  componentDidUpdate() {
    if (this.state.data.points.length === 0) {
      fetch(`${process.env.REACT_APP_URL}/waypoints/nearby`, {
        method: "POST",
        body: JSON.stringify({
          lat: this.state.lat,
          lng: this.state.lng,
          query: this.context.userInterests
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


  render() {
    if (this.state.loading === true) {
      return (
        <>
          <HamburgerIcon />
          <LoadingScreen></LoadingScreen>
        </>
      )
    } else {
      return (
        <div>
          <HamburgerIcon />
          <div className='dashboard-container'>
            <h1>Welcome, User</h1>
            <h2>Nearby Locations</h2>
            <div className='new-places-container'>
              <h1>What do you think of these places?</h1>
              <div className='top-options'>
                {this.state.data.points.map((location) => {
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
}

export default Dashboard;