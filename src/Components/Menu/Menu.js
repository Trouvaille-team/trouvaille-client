import React, { Component } from 'react';
import ContextProvider from '../../Context'
import './Menu.css'

export default class Menu extends Component {
  static contextType = ContextProvider

  render() {
    return (
      <div>
          {this.context.showMenu && 
        <nav id='menu'>
          <ul className='menu-links'>
            <li>See where I've been</li>
            <li>Change Preferences</li>
            <li>Discover New Places</li>           
          </ul>
        </nav>  
          }      
      </div>
    )
  }
}