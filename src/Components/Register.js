import React from 'react'

class Register extends React.Component{
  render() {
    return (
      <div className='register'>
        <h1>Register</h1>
        <p>“I may not have gone where I intended to go, 
          but I think I have ended up where I intended to be.”
        </p>
        <p>
         - Douglas Adams
        </p>
        <div>
          <p>
            Ready to discover new places? Sign up today!
          </p>
        </div>
        <form type='submit' for='account-sign-up'>
          <input type="text" placeholder='Username' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder="Password" />
          <button onClick={() => this.props.history.push('/dashboard')} type='submit'>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default Register;