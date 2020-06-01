import React, { Component } from 'react';

//user data (userInterests, and userTrip) has to get stored in the database
//all the data in context clears whenever browser is refreshed!!

const Context = React.createContext({
  userInterests: [],
  showMenu: false,
  toggleMenu: () => { },
  userTrip: {
    destination: '',
    numDetours: 0,
    maxRadius: 0,
    maxTime: 0,
    origin: {}
  },
  addUserInterests: ()=>{},
  removeUserInterests: ()=>{},
  setTrip: ()=>{}
})
export default Context

//-----------------------------------//

export class ContextProvider extends Component {
  state = {
    showMenu: false,

    userInterests: [],

    toggleMenu: () => {},

    userTrip: {
      destination: '',
      numDetours: null,
      maxRadius: null,
      maxTime: null
    }, 
    addUserInterests: ()=>{},
    removeUserInterests: ()=>{},
    setTrip: ()=>{},
    waypoints: [],
    endCoords: {},
    originCoords: {},
    setOriginCoords: () => { },
    setEndCoords: () => { },
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

  //Add items to interests array
  addUserInterests = (checkedItem) => {
    //first make sure newInterest isn't already in the array!
    for (let item in this.userInterests) {
      if (checkedItem === item) {
        return 'item is already in list'
      }
    } 
    this.setState({ userInterests: [...this.state.userInterests, checkedItem]})
  }

  //remove items when they're unchecked
  removeUserInterests = (unchekedItem) => {
    for(let i=0; i<this.state.userInterests.length; i++) {
      if (unchekedItem === this.state.userInterests[i]) {
        return this.state.userInterests.splice(i, 1)
      }
    }
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
      userInterests: [],
      userTrip: this.state.userTrip,
      toggleMenu: this.toggleMenu,
      addUserInterests: this.addUserInterests,
      removeUserInterests: this.removeUserInterests,
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