import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContextProvider from '../../Context'
import TokenService from '../../services/token-service'
//import PlanTrip from './PlanTrip/PlanTrip';
import { Spring } from 'react-spring/renderprops'
import './Header.css'
import HamburgerIcon from '../HamburberIcon/HamburgerIcon';


class Header extends Component {

  static contextType = ContextProvider

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div className="dashboard-logout">
        <span className='trouvaille-nav-user'>
          {/*Not sure if we want this here. Displays the username of the logged in user everywhere the logout link is rendered. */}
          {this.context.user.username}
        </span>
        <Link
          onClick={this.handleLogoutClick}
          to='/login'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (<>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Sign up</Link>
      {window.location.pathname !== '/interests' ? <div>
        <Link to='/interests'>Continue without logging in</Link>
      </div> : null}
    </>
    )
  }

  render() {
    if (window.location.pathname === '/') {
      return (
        <>
          <HamburgerIcon />
          <Spring
            from={{ marginTop: -500 }}
            to={{ marginTop: 0 }}>
            {props => <div style={props}>
              <header className='trouvaille_header'>
                <h1 >
                  <Link to='/'>
                    Trouvaille
      </Link>
                </h1>
              </header>
            </div>}
          </Spring>
        </>

      )
    } else {
      return (
        <>
          <HamburgerIcon />
          <Spring
            from={{ marginTop: -500 }}
            to={{ marginTop: 0 }}>
            {props => <div style={props}>
              <header className='trouvaille_header'>

                <nav className="trouvaille-nav-dashboard">
                  <Link to='/new-trip'>Plan a New Trip
              </Link>
                  {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
                </nav>
                <h1 className="trouvaille-header">
                  <Link to='/'>
                    Trouvaille
            </Link>
                </h1>
              </header></div>}
          </Spring>
        </>

      );
    }
  }
}

export default Header;