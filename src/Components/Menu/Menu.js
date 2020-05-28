import React, { Component } from 'react';
import './Menu.css'

export default class Menu extends Component {

  render() {
    return (
      <div>
          {this.props.showMenu && 
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