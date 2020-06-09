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
        <nav className="trouvaille-nav-dashboard">
          <Link
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav className="trouvaille-nav">
        <p><Link to='/login'>Login</Link></p>
        <p><Link to='/register'>Sign up</Link></p>
        <p><Link to='/interests'>Continue without logging in</Link></p>
      </nav>
    )
  }

  render() {
    if (window.location.pathname === '/') {
      return (
        <Spring
          from={{ marginTop: -500 }}
          to={{ marginTop: 0 }}>
          {props => <div style={props} className="trouvaille-header"> <h1 >
            <Link to='/'>
              Trouvaille
            </Link>
          </h1> </div>}
        </Spring>
      )
    } else {
      return (
        <Spring
          from={{ marginTop: -500 }}
          to={{ marginTop: 0 }}>
          {props => <div style={props}>
            <header className="trouvaille-header">
              {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
              <h1>
                <Link to='/'>
                  Trouvaille
                </Link>
              </h1>
              
            <div className='plan-trip'>
              <Link to='/new-trip'>
                <button>Plan a new Trip</button>
              </Link>
            </div>
              
            
            </header>
          </div>}
        </Spring>
      );
    }
  }
}

export default Header;