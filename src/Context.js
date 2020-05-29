import React, { Component } from 'react';

const Context = React.createContext({
  showMenu: false,
  toggleMenu: () => { },
  userTrip: {
    destination: '',
    numDetours: 0,
    maxRadius: 0,
    maxTime: 0,
    origin: {}
  },
  setTrip: () => { }
})
export default Context

//-----------------------------------//

export class ContextProvider extends Component {
  state = {
    showMenu: false,
    toggleMenu: () => { },
    userTrip: {
      destination: '',
      numDetours: null,
      maxRadius: null,
      maxTime: null
    },
    waypoints: [],
    endCoords: {},
    originCoords: {},
    setOriginCoords: () => { },
    setEndCoords: () => { },
    setTrip: () => { },
    setWaypoints: () => { }
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  setEndCoords = (endCoords) => {
    this.setState({ endCoords })
  }

  setOriginCoords = (originCoords) => {
    this.setState({ originCoords })
  }

  //Store all all the values passed into the PlanTrip form!
  setTrip = (destination, detours, radius, time) => {
    this.setState({
      userTrip: {
        destination: destination,
        numDetours: detours,
        maxRadius: radius,
        maxTime: time
      }
    })
  }

  setWaypoints = (waypoints) => {
    this.setState({
      waypoints: waypoints
    })
  }

  render() {
    const value = {
      showMenu: this.state.showMenu,
      toggleMenu: this.toggleMenu,
      userTrip: this.state.userTrip,
      setTrip: this.setTrip,
      waypoints: this.state.waypoints,
      setWaypoints: this.setWaypoints,
      setEndCoords: this.setEndCoords,
      endCoords: this.state.endCoords,
      setOriginCoords: this.setOriginCoords,
      originCoords: this.state.originCoords
    }
    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  }
}