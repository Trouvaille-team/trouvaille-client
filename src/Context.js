import React, { Component } from 'react';

const Context = React.createContext({
  showMenu: false,
  toggleMenu: ()=>{}
})
export default Context

export class ContextProvider extends Component {
  state ={
    showMenu: false,
    toggleMenu: ()=>{}
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu})
  }

  render() {
    const value = {
      showMenu: this.state.showMenu,
      toggleMenu: this.toggleMenu
    }
    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  }
}