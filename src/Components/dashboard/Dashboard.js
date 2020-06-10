import React from 'react';
import ContextProvider from '../../Context'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import HamburgerIcon from '../HamburberIcon/HamburgerIcon';
import LoadingScreen from "../loading/loading";
// import FadeIn from "react-fade-in";
//import {Link} from 'react-router-dom';
//import PlanTrip from './Nav/PlanTrip';
import { Spring } from 'react-spring/renderprops'
import './dashboard.css'

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      lng: 0,
      data: { points: [] },
      loading: true,
      activeImage: ""
    };
  }

  static contextType = ContextProvider

  componentDidMount() {
    let myVar = this;
    navigator.geolocation.getCurrentPosition(function (position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      myVar.context.setOriginCoords({ lat: latitude, lng: longitude })
      myVar.setState({ lat: latitude, lng: longitude })
    })
  }
  // This is a stupid solution change if possible
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
        this.setState({ data, loading: false })
      }).catch(function (error) {
        return error.message
      })
    }
  }
  async getPhoto(photo_reference) {
    console.log(photo_reference)
    let result = await fetch(`${process.env.REACT_APP_URL}/waypoints/photo`, {
      method: "POST",
      body: JSON.stringify({
        photo_reference: photo_reference
      }),
      headers: {
        "Content-Length": 61,
        "Content-Type": "application/json; charset=utf-8"
      },
      credentials: "same-origin"
    }).then(res => {
      return res.json()
    }).then(data => {
      return data
    })
    return result

  }

  // getUserLocation = () => {
  // }

  render() {


    if (this.state.loading === true) {
      return (<><HamburgerIcon /><LoadingScreen /></>)
    } else {
      return (
        <div>
          <HamburgerIcon />
          <div className='dashboard-container'>
            <h1>Welcome, User</h1>
            <h2>Nearby Locations</h2>
            <div className='new-places-container'>
              <h1>Here are some places nearby you might like</h1>
              <div className='top-options'>
                {
                  this.state.data.points.map((location, i) => {
                    return (
                      <div className='option' ref={`${location.name}`} key={i}>

                        <Spring
                          from={{ marginLeft: -500 }}
                          to={{ marginLeft: 0 }}>
                          {props => <div style={props}><div className='title-button-container'>
                            <h2>{location.name}</h2>
                            {location.photoInfo ?
                              <> <button onClick={() => this.refs[location.name].lastChild.nodeName === "IMG" ? this.refs[location.name].removeChild(this.refs[location.name].lastChild) : this.getPhoto(location.photoInfo[0].photo_reference
                              ).then(url => {
                                let img = document.createElement('img')
                                img.src = url
                                img.alt = `an image on ${location.name}`
                                this.refs[location.name].append(img)
                              })}>I hate promises</button> </> : null}
                          </div></div>}
                        </Spring>

                      </div>)
                  })}
              </div>
            </div>
          </div>

        </div >

      )
    }
  }
}

export default Dashboard;