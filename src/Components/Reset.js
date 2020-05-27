import React, { Component } from 'react';

class Reset extends React.Component{

  render() {
    return (
      <div className='reset'>
        <div id='reset' class='reset-hidden'>
          <h1>Forgot your password?</h1>
          <p>No problem! Enter the email associated with your account
            below.  
          </p>
          <form type='submit' for='password-reset'>
            <input type="email" placeholder="Email" />
            <button type='submit'>Reset</button>
          </form>
        </div>
        <div class="pass-response-hidden">
          <h2>Reset Password Sent</h2>
          <p>An email has been sent to your address with a reset password
          you can use to access your account.
          </p>
          <button onClick={() => this.props.history.push('/Account')}>Go Back</button>
        </div>
      </div>
    )
  }
}

export default Reset;