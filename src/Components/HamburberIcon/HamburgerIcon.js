import React, { Component } from 'react'
import Menu from '../Menu/Menu'
import './HamburgerIcon.css'
import ContextProvider from '../../Context'

export default class HamburgerIcon extends Component {

  static contextType = ContextProvider
  render() {
    return (
      <>
      <Menu />
      <div className='menu-toggler'
        onClick={this.context.toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div> 
      </>
    )
  }
}