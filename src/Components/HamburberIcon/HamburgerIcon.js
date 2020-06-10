import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import { Link } from 'react-router-dom'
export default class MenuContainer extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      top: "0"
    },
    bmMenu: {
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu styles={this.styles}>
        <li className='link-container'><Link to="/dashboard">Discover new places</Link></li>
        <li className='link-container'><Link to="/interests">Change my preferences</Link></li>
      </Menu>
    );
  }
}