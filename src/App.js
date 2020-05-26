import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import NotFound from './Components/NotFound';
import PlanTrip from './Components/Nav/PlanTrip';

class App extends React.Component {
  render(){
    return (
      <main className='App'>
        <Router>
          <Header />
          <Switch>
            <Route
              path={'/register'}
              component={Register}>
            </Route>
            <Route
              path={'/login'}
              component={Login}>
            </Route>
            <Route
              path='/'
              component={Dashboard}>
            </Route>
            <Route
            component={NotFound}>
            </Route>
        </Switch>
        </Router>
      </main>
    );
  }
}

export default App;