import React from 'react';
import Menu from '../Menu/Menu'

import './PlanTrip.css'

class PlanTrip extends React.Component{

  handleSubmit = e => {
    e.preventDefault();
    console.log('form submitted')
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
          <input id='destination' type='text' placeholder='city, state, or zip' required/>

          <label htmlFor='num-detours'>How many detours will you make en route?</label>
          <input type='number' id='num-detours' min='1' max='25?'/>

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
      </>
    )
  }
}

export default PlanTrip;