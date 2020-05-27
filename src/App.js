import React from 'react';
<<<<<<< HEAD
import MapContainer from "./Components/MapContainer/MapContainer"
function App() {
  return (
    <main className="App">
      <MapContainer></MapContainer>
    </main>
  );
=======
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import NotFound from './Components/NotFound';

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
>>>>>>> a287caa92408394ded5b2c94946cf33e8a63c52d
}

export default App;