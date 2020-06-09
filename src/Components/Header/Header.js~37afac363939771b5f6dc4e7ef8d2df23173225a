import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContextProvider from '../../Context'
import TokenService from '../../services/token-service'
//import PlanTrip from './PlanTrip/PlanTrip';
import { Spring } from 'react-spring/renderprops'
import './Header.css'
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
        <Spring
          from={{ marginTop: -500 }}
          to={{ marginTop: 0 }}>
          {props => <div style={props}>      <h1 className="trouvaille-header">
            <Link to='/'>
              Trouvaille
      </Link>
          </h1></div>}
        </Spring>


      )
    } else {
      return (
        <Spring
          from={{ marginTop: -500 }}
          to={{ marginTop: 0 }}>
          {props => <div style={props}><header className='trouvaille_header'>
            {/* <div className='menu-toggler'
                 onClick={this.context.toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div> */}

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


      );
    }
  }
}

export default Header;