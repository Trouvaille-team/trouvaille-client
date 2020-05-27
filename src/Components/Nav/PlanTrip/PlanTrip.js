import React from 'react';

class PlanTrip extends React.Component{
  render() {
    return (
      <form>
        <label for='destination'>Where are you going?</label>
        <input type='text' placeholder='city, state, or zip' required></input>

        <label for='num-detours'>How many detours will you make en route?</label>
        <select name='stops' id='stops'>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>

        <label for='radius'>Choose your max detour radius</label>
        <select name='radius' id='radius'>
          <option>0-15 miles</option>
          <option>15-30 miles</option>
          <option>30-45 miles</option>
          <option>45</option>
        </select>

        <label>Choose your max trip time </label>
        <select>
          <option>1-5 hrs</option>
          <option>5-10</option>
          <option>10+</option> 
        </select>
        
      </form>
    )
  }
}

export default PlanTrip;