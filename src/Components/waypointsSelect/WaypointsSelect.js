import React from 'react';
import ContextProvider from '../../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import LoadingScreen from "../loading/loading";
import FadeIn from "react-fade-in";
import HamburgerIcon from '../HamburberIcon/HamburgerIcon'


export default class WaypointSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [],
      endCoords: {},
      waypoints: [],
      loading:true
    }
  }

  

  static contextType = ContextProvider
  componentDidMount() {
    fetch(`${process.env.REACT_APP_URL}/waypoints/`, {
      method: "POST",
      body: JSON.stringify({
        "origin": `${this.context.originCoords.lat},${this.context.originCoords.lng}`,
        "dest": this.context.userTrip.destination,
        "query": this.context.userInterests
      }),
      headers: {
        "Content-Length": 61,
        "Content-Type": "application/json; charset=utf-8"
      },
      credentials: "same-origin"
    }).then((res) => {
      return res.json()
    }).then((data) => {
      this.setState({ endCoords: data.endCoords, points: data.points, loading: false })
    }).catch(function (error) {
      return error.message
    })
  }

  displayOption = () => {
    if (this.state.points.length > 0) {
      return (
      <FadeIn>
      <div className='option'>
        <img alt={this.state.points[0].name}></img>
        <div className='title-button-container'>
          <button
            className='add-button'
            onClick={e => this.handleAddButton(e)}
          >
            <FontAwesomeIcon
          icon={faPlus}
            />
          </button>
          <h2>{this.state.points[0].name}</h2>
          <button
          onClick = {e => this.handleDeleteButton(e)}
          className='add-button'
          >
            <FontAwesomeIcon
          icon={faTimes}
            />
          </button>
        </div>
      </div>
        </FadeIn>)
    } else {
      return (<h4>Sorry we couldn't find anywhere interesting along that route</h4>)
    }
  }

  handleAddButton = (e) => {
    this.setState({
      waypoints: [...this.state.waypoints, this.state.points[0]],
      points: this.state.points.slice(1)
    })
  }

  handleDeleteButton = () => {
    this.setState({
      points: this.state.points.slice(1)
    })
  }
  handleDoneButton() {
    this.context.setWaypoints(this.state.waypoints)
    this.context.setEndCoords(this.state.endCoords)
    this.props.history.push('/map');
  }

  render() {
    if(this.state.loading === true) {
      return(<><HamburgerIcon /><LoadingScreen /></>)
    } else {
    return (
      <>
        <HamburgerIcon />
        {this.displayOption()}
        <h4>Your Waypoints</h4>
        <button
        onClick = {e => this.handleDoneButton()}
        >done</button>
        {this.state.waypoints.map((location) => {
          return (
            <div className='option'>
              <img alt={location.name}></img>
              <div className='title-button-container'>
                <h2>{location.name}</h2>
              </div>
            </div>)
        })}
      </>
    )}
  }
}

