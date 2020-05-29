import React from 'react';
import Menu from '../Menu/Menu';
import ContextProvider from '../../Context'

import './PlanTrip.css'

class PlanTrip extends React.Component{
  static contextType = ContextProvider 

  handleSubmit = e => {
    e.preventDefault();
    //Get all input values from the form!
    const destination = e.target.destination.value
    const detours = e.target.detours.value
    const radius = e.target.radius.value
    const time = e.target.time.value
    //Set the state witin context (userTrip obj)
    this.context.setTrip(destination, detours, radius, time)
    //Did it work????
    console.log('form submitted')
    //Need to submit twice to see values in console
    //But looks like they're set after first submit!! -- see Components tab in devTools
    console.log(this.context.userTrip) 
    //api post request in here...
    //to what endpoint?
    this.props.history.push('/map');
  }                                   
  


  render() {
    return (
      <>
        <Menu />
        <form className='plan-trip' onSubmit={ e => this.handleSubmit(e)}>
          <label htmlFor='destination'>Where are you going?</label>
          <input type='text' id='destination' placeholder='city, state, or zip' required/>

          <label htmlFor='detours'>How many detours will you make en route?</label>
          <input type='number' id='detours' min='1' max='25?'/>

          <label htmlFor='radius'>Choose your max detour radius</label>
          <select name='radius' id='radius'>
            <option>0-15 miles</option>
            <option>15-30 miles</option>
            <option>30-45 miles</option>
            <option>45</option>
          </select>

          {/* assuming max time includes entire trip start to finish */}
          <label htmlFor='time'>Choose your max trip time(hrs)</label> 
          <input type='number' id='time' min='1' max='100'/>  
          <button type='submit'>Submit</button>
        </form>
        <button onClick={() => this.props.history.push('/dashboard')}>Back</button>
      </>
    )
  }
}

export default PlanTrip;