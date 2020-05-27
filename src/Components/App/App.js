import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import Header from '../Header';
import Dashboard from '../Dashboard';
import NotFound from '../NotFound';
//import PlanTrip from '../Nav/PlanTrip';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = { showMenu: false };
      this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = function() {
    this.setState({ showMenu: !this.state.showMenu })
  }
  
  render(){
    return (
      <main className='App'>
        <Router>
          <Header toggleMenu={this.toggleMenu}/> 
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
              component={() => <Dashboard showMenu={this.state.showMenu}/>}>
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