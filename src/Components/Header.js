import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContextProvider from '../Context'
import TokenService from '../services/token-service'
//import PlanTrip from './PlanTrip/PlanTrip';

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
        <Link to='/login'>Login</Link>
        <Link to='/register'>Sign up</Link>
        <div>        
          <Link to='/interests'>Continue without logging in</Link>
        </div>
      </nav>
    )
  }

  render() {

    if (window.location.pathname === '/') {
      return (
      <h1 className="trouvaille-header">
      <Link to='/'>
        Trouvaille
      </Link>
    </h1>
      )
    } else {
      return (
        <header className='trouvaille_header'>
            {/* <div className='menu-toggler'
                 onClick={this.context.toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div> */}
          <h1 className="trouvaille-header">
            <Link to='/'>
              Trouvaille
            </Link>
          </h1>
          <Link to='/new-trip'>
            <button>Plan a new Trip</button>
          </Link>
          {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
        </header>
      );
    }
  }
}

export default Header;