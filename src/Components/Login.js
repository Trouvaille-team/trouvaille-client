import React, { Component } from 'react';


class Login extends Component {

onLoginSubmit(e) {
  // prevent page reload
  e.preventDefault();
  
  // auth verification process will go here

  // send user to next page upon successful login
  let error = null;
  if (!error) {
    this.props.history.push('/dashboard')
  }
}

render() {
  return (
    <div className='login'>
      <h1>Log In</h1>
      <p>Welcome back!</p>
      <form type='submit' htmlFor='account-login'>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button onClick={() => this.props.history.push('/dashboard')}>Log In</button>
      </form>
    </div>
  )
}
}

export default Login;