import React, { Component } from 'react';
import AuthApiService from '../services/auth-api-service';
import Context from '../Context'
class Login extends Component {

  state = { error: null }

  static contextType = Context;

onLoginSubmit(e) {
  // prevent page reload
  e.preventDefault();
  const { username, password } = e.target
  this.setState({ error: null })
  // auth verification process will go here
  AuthApiService.postLogin({
    username: username.value,
    password: password.value,
  })
  .then(res => {
    console.log()
    username.value = ''
    password.value = ''
    this.context.processLogin(res.authToken)
  })
  .then(() => {
    if(!this.state.error) {
      this.props.history.push('/dashboard')
    }
  })
  .catch(res => {
    this.setState({ error: res.error })
  })
  // send user to next page upon successful login
  
}

render() {
  const { error } = this.state
  return (
    <div className='login'>
      <h1>Log In</h1>
      <p>Welcome back!</p>
      <form onSubmit={e => this.onLoginSubmit(e)}>
        <div>
          {error && <p>{error}</p>}
        </div>
        <label htmlFor="login-username">Username: </label>
        <input type="text" id="login-username" name='username' placeholder="Username" />
        <label htmlFor="login-password">Password: </label>
        <input type="password" id="login-password" name='password' placeholder="Password" />
        <button>Log In</button>
      </form>
    </div>
  )
}
}

export default Login;