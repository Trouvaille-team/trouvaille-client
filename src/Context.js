import React, { Component } from 'react';

const Context = React.createContext({
  showMenu: false,
  toggleMenu: ()=>{},
  userTrip: {
    destination: '',
    numDetours: 0,
    maxRadius: 0,
    maxTime: 0
  },
  setTrip: ()=>{}
})
export default Context

//-----------------------------------//

export class ContextProvider extends Component {
  state ={
    showMenu: false,
    toggleMenu: ()=>{},
    userTrip: {
      destination: '',
      numDetours: null,
      maxRadius: null,
      maxTime: null
    },
    setTrip: ()=>{}
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu})
  }

  //Store all all the values passed into the PlanTrip form!
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
      toggleMenu: this.toggleMenu,
      userTrip: this.state.userTrip,
      setTrip: this.setTrip
    }
    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  }
}