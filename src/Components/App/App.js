import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import Header from '../Header/Header';
import Dashboard from '../dashboard/Dashboard';
import NotFound from '../NotFound';
import PlanTrip from '../PlanTrip/PlanTrip';
import LandingPage from '../LandingRoute/LandingPage';
import MapContainer from '../MapContainer/MapContainer';
import Interests from '../Interests/Interests';
import { ContextProvider } from '../../Context';
import WaypointsSelect from '../waypointsSelect/WaypointsSelect'
import './App.css';
import MyTrips from "../myTrips/MyTrips"

class App extends React.Component {

  render() {

    return (
      <ContextProvider>
        <main className='App'>

          <Router>
            <Header />
            <Switch>
              <Route
                path={"/waypoints"}
                component={WaypointsSelect}>
              </Route>
              <Route exact path={'/'} component={LandingPage} />
              <Route
                path={'/register'}
                component={Register}>
              </Route>
              <Route
                path={'/login'}
                component={Login}>
              </Route>
              <Route
                path={'/dashboard'}
                component={() => <Dashboard />}>
              </Route>
              <Route
                path={'/new-trip'}
                component={PlanTrip}>
              </Route>
              <Route
                path={'/map'}
                component={MapContainer}>
              </Route>
              <Route
                path={'/MyTrips'}
                component={MyTrips}>
              </Route>
              <Route
                path={'/interests'}
                component={Interests}>
              </Route>
              {/* <Route
                path={'/past-trips'}
                component={PastTrips}>
              </Route> */}
              <Route
                component={NotFound}>
              </Route>
            </Switch>
          </Router>
        </main>
      </ContextProvider>
    );
  }
}

export default App;