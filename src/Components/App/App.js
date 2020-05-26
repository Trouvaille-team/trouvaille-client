import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import LandingPage from '../routes/LandingRoute/LandingPage'
import LoginForm from '../routes/LoginRoute/LoginForm'
import NotFound from '../routes/NotFoundRoute/NotFound'
import RegistrationForm from '../routes/RegisterRoute/RegistrationForm'

import './App.css'

class App extends Component {
  
  render() {
    return (
      <main className='App'>
        <Link to='/'><h1>Trouvaille</h1></Link>
        <Switch>
          <Route exact path={'/'} component={LandingPage} />
          <Route path={'/register'} component={RegistrationForm} />
          <Route path={'/login'} component={LoginForm} />
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default App;