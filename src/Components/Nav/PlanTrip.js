import React from 'react';

class PlanTrip extends React.Component{
  render() {
    return (
      <form>
        <label for='destination'>Where are you going?</label>
        <input type='text' placeholder='city, state, or zip' required/>

        <label for='num-detours'>How many detours will you make en route?</label>
        <input type='number' id='num-detours' min='1' max='25?'/>

        <label for='radius'>Choose your max detour radius</label>
        <select name='radius' id='radius'>
          <option>0-15 miles</option>
          <option>15-30 miles</option>
          <option>30-45 miles</option>
          <option>45</option>
        </select>

        {/* assuming max time includes entire trip start to finish */}
        <label for='time'>Choose your max trip time(hrs)</label> 
        <input type='number' id='time' min='1' max='100'/>  
        
      </form>
    )
  }
}

export default PlanTrip;