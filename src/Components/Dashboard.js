import React from 'react';
import Menu from './Menu/Menu'
import ContextProvider from '../Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
//import {Link} from 'react-router-dom';
//import PlanTrip from './Nav/PlanTrip';

class Dashboard extends React.Component{

  constructor(props){
    super(props)
      this.state = {
        latitude: 0,
        longitude: 0
    };
  }


  componentDidMount(){
    navigator.geolocation.getCurrentPosition(function(position){
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      console.log(latitude,longitude)
    });
  }

  // getUserLocation = () => {
    
  // }

  static contextType = ContextProvider

  

  render() {
    return (
      <div>
        <Menu />

        {/* <ul id="nav-ul">
            <li><Link to="/new-trip" component={PlanTrip}>Plan a new trip</Link></li>
            <li><Link to="">See where I've been</Link></li>
            <li><Link to="">Discover new places</Link></li>
            <li><Link to="">Change my preferences</Link></li>
        </ul> */}
        
        <div className='dashboard-container'>
          <h1>Welcome, User</h1>
          <h2>Nearby Locations</h2>
          <div className='new-places-container'>
        <h1>What do you think of these places?</h1>
        <div className='top-options'>
          <div className='option'>
            <img alt='location-1'></img>
            <div className='title-button-container'>
              <button
              className='add-button'
              >
                <FontAwesomeIcon
                  icon={faTimes}
                />
               </button>
              <h2>Placeholder Title 1</h2>
              <button
              className='add-button'
              >
                <FontAwesomeIcon
                  icon={faPlus}
                />
              </button>
            </div> 
          </div>
          <div className='option'>
            <img alt='location-2'></img>
            <div className='title-button-container'>
            <button
              className='add-button'
              >
                <FontAwesomeIcon
                  icon={faTimes}
                />
               </button>
              <h2>Placeholder Title 2</h2>
              <button
              className='add-button'
              >
                <FontAwesomeIcon
                  icon={faPlus}
                />
              </button>
            </div> 
          </div>
        </div>
        <div className='bottom-options'>
          <div className='option'>
              <img alt='location-3'></img>
              <div className='title-button-container'>
              <button
              className='add-button'
              >
                <FontAwesomeIcon
                  icon={faTimes}
                />
               </button>
                <h2>Placeholder Title 3</h2>
                <button
              className='add-button'
              >
                <FontAwesomeIcon
                  icon={faPlus}
                />
              </button>
              </div> 
            </div>
            <div className='option'>
              <img alt='location-4'></img>
              <div className='title-button-container'>
              <button
              className='add-button'
              >
                <FontAwesomeIcon
                  icon={faTimes}
                />
               </button>
                <h2>Placeholder Title 4</h2>
                <button
              className='add-button'
              >
                <FontAwesomeIcon
                  icon={faPlus}
                />
              </button>
              </div> 
            </div>
        </div>
      </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;