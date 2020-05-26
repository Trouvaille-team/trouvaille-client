import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class RegistrationForm extends Component {
  render() {
    return (
      <>
        <h2>Register</h2>
        <form className='registration-form'>
          <fieldset className='registration-fieldset'>
            <label htmlFor='registration-username-input'>Enter your username: </label>
            <input id='registration-username-input' name='username' required></input>
            <label htmlFor='registration-password-input'>Enter your password: </label>
            <input id='registration-password-input' name='password' type='password' required></input>
            <button type='submit' className='registration-button'>Sign Up</button>
            {' '}
            <Link to='/login'>Already have an account?</Link>
          </fieldset>
        </form>
      </>
    )
  }
}

export default RegistrationForm;