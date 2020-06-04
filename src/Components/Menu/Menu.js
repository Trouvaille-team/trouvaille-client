import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
            <li><Link to="">See where I've been</Link></li>
            <li><Link to="/discover">Discover new places</Link></li>
            <li><Link to="/interests">Change my preferences</Link></li>           
          </ul>
        </nav>  
          }      
      </div>
    )
  }
}