import React, { Component } from 'react';
import ContextProvider from '../Context'

export default class Interests extends Component {

    static contextType = ContextProvider

    handleCheck = (e) => {
        let value = e.target.id;
        let checked = e.target.checked;
        if (checked) {
            //add checked values to context.userInterests
            this.context.addUserInterests(value);
        } else {
            //remove them if they're unchecked
            this.context.removeUserInterests(value)
        }
    }

    options = ["Camping", "Hiking", "Beaches", "Parks", "Zoos", "Museums", "Breweries/Wineries", "Amusement", "Haunted", "Novelty", "Military/Memorial", "Monuments"]

    handleSubmit = e => {
        e.preventDefault();
        //what do we do here?
    }

    //map through options array and render a checkbox for each
    //map through userInterests array (in context), if a value matches value in options, render the checkbox if checked
    renderCheckBoxes = (option) => {
      const interestArr = this.context.userInterests
      console.log('interestArr:', interestArr )
      interestArr.forEach(interest => {
          if (interestArr.length === 0 || interest !== option) {
              return (
                <>
                  <label htmlFor={option}>{option}</label>
                  <input id={option} type="checkbox" onChange={e => this.handleCheck(e)}/>
                </>
              )
          } else {
              return (
                <>
                  <label htmlFor={option}>{option}</label>
                  <input id={option} type="checkbox" onChange={e => this.handleCheck(e)} checked/>
                </>
              )
          }
      })
    }


    //----------------------------------------------------------------------------------------------------------------------
    // handleAlreadyChecked = (val) => {
    //     this.context.userInterests.map((interest) => {
    //         if (interest === val) {
    //             return true
    //         }
    //     })
    //     return false
    // }

    // handleRenderInterests = (interest, checked) => {
    //     if (!checked) {
    //         return (
    //             <>
    //                 <label htmlFor={interest}>{interest}</label>
    //                 <input id={interest} type="checkbox" onChange={e => this.handleCheck(e)}></input>
    //             </>
    //         )
    //     } else if (checked) {
    //         return (
    //             <>
    //                 <label htmlFor={interest}>{interest}</label>
    //                 <input id={interest} type="checkbox" onChange={e => this.handleCheck(e)} checked ></input>
    //             </>
    //         )
    //     }
    // }

    render() {
        return (
            <div className='interests-container'>
                <header className="interests-header">
                    { /* have the heading display the users name */}
                    <h1>What does the user like to do when travelling?</h1>
                    <section>
                        <p>Help us get an idea of what you like to partake in when travelling! Check those that apply to you.</p>
                    </section>
                </header>
                <div>
                    <form className="interests-form">
                        {this.options.map((option, i) => {
                            return (
                                <li key={i}>
                                  {/* {this.renderCheckBoxes(option)} */}
                                  <label htmlFor={option}>{option}</label>
                                  <input id={option} type="checkbox" onChange={e => this.handleCheck(e)}/>
                                </li>
                            )
                        })}
                        <div className='submit-button'>
                            <button
                                //submit handler is called in form tag
                                onClick={() => this.props.history.push('/dashboard')}
                            >Submit</button>
                        </div>
                    </form>
                </div>
                <h3>Current Selections:</h3>
                <ul>
                      {this.context.userInterests.map((interest, i) => {
                        return (
                          <li key={i}>
                            {interest}
                          </li>
                        )
                      })}
                </ul>
            </div>
        )
    }
}
