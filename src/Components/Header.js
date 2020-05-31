import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContextProvider from '../Context'
//import PlanTrip from './Nav/PlanTrip';

class Header extends Component {
  static contextType = ContextProvider
  
  renderLogoutLink() {
    return (
      <div className="dashboard-logout">
        <span className='trouvaille-nav-user'>
          {/* username goes here */}
        </span>
        <nav className="trouvaille-nav-dashboard">
          <Link
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
    return (
      <header className='trouvaille_header'>
          <div className='menu-toggler'
               onClick={this.context.toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        <h1 className="trouvaille-header">
          <Link to='/'>
            Trouvaille
          </Link>
        </h1>
        <Link to='/new-trip'>
          <button>Plan a new Trip</button>
        </Link>
        {this.renderLoginLink()}
      </header>
    );
  }
}

export default Header;