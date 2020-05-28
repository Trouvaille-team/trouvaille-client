import React, { Component } from 'react';

class Login extends Component {
render() {
  return (
    <div className='login'>
      <h1>Log In</h1>
        <p>Welcome back!</p>
        <form type='submit' for='account-login'>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button onClick={() => this.props.history.push('/Dashboard')}>Log In</button>
        </form>
    </div>
  )
}
}

export default Login;