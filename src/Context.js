import React, { Component } from 'react';

const Context = React.createContext({
  showMenu: false, 
  userInterests: [],
  userTrip: {
    destination: '',
    numDetours: 0,
    maxRadius: 0,
    maxTime: 0
  },
  toggleMenu: ()=>{},
  setUserInterests: ()=>{},
  setTrip: ()=>{}
})
export default Context

//-----------------------------------//

export class ContextProvider extends Component {
  state ={
    showMenu: false,
    userInterests: [],
    userTrip: {
      destination: '',
      numDetours: null,
      maxRadius: null,
      maxTime: null
    }, 
    toggleMenu: ()=>{}, 
    setUserInterests: ()=>{},
    setTrip: ()=>{}
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu})
  }

  //Add items to interests array
  //need to prevent duplicates from being added
  //need to remove items when they're unchecked
    //Store in database if user is logged in
  setUserInterests = (newInterest) => {
    this.setState({ userInterests: [...this.state.userInterests, newInterest]})
  }

  //Store all all the values passed into the PlanTrip form!
      //Store in database if user is logged in
  setTrip = (destination, detours, radius, time) => {
    this.setState({ userTrip: {
      destination: destination,
      numDetours: detours,
      maxRadius: radius,
      maxTime: time
    }})
  }

  render() {
    const value = {
      showMenu: this.state.showMenu,
      userInterests: [],
      userTrip: this.state.userTrip,
      toggleMenu: this.toggleMenu,
      setUserInterests: this.setUserInterests,
      setTrip: this.setTrip
    }
    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  }
}