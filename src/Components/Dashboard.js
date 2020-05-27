import React from 'react';
import {Link} from 'react-router-dom';
import PlanTrip from './Nav/PlanTrip';

class Dashboard extends React.Component{
  render() {
    return (
      <div>
        <ul id="nav-ul">
            <li><Link to="/new-trip" component={PlanTrip}>Plan a new trip</Link></li>
            <li><Link to="">See where I've been</Link></li>
            <li><Link to="">Discover new places</Link></li>
            <li><Link to="">Change my preferences</Link></li>
        </ul>

        <div className='dashboard-container'>
          <h1>Welcome, User</h1>
          <h2>Nearby Locations</h2>
          <div className='nearby-location-list'>
            <ul>
              <li>Example Location
                <img alt='placeholder'></img>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;