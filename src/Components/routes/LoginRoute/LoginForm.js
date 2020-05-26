import React, {Component} from 'react'

class LoginForm extends Component {
  render() {
    return(
      <>
        <h2>Login</h2>
        <form className='login-form'>
          <fieldset className='login-fieldset'>
            <label htmlFor='login-username-input'>Enter your username: </label>
            <input id='login-username-input' name='username' required></input>
            <label htmlFor='login-password-input'>Enter your password: </label>
            <input id='login-password-input' name='password' type='password' required></input>
            <button type='submit' className='login-button'>Login</button>
          </fieldset>
        </form>
      </>
    )
  }
}

export default LoginForm