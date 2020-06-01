import React, { Component } from 'react';
import ContextProvider from '../Context'

export default class Interests extends Component {

    static contextType = ContextProvider

    handleCheck = (e) => {
        let value = e.target.id;
        let checked = e.target.checked;
        console.log('value:', value)
        console.log('checked:', checked)
        if (checked) {
            //add checked values to context.userInterests
            this.context.addUserInterests(value);
        } else {
            //remove them if they're unchecked
            this.context.removeUserInterests(value)
        }
    }

    interests = ["camping", "hiking", "museums", "beaches", "novelty", "breweries", "museums", "military", "monuments", "parks", "zoos", "ammusment", "haunted"]

    handleSubmit = e => {
        e.preventDefault();

        console.log('submitted')
        //what to we do here?
    }


    handleAlreadyChecked = (val) => {
        console.log(val)
        console.log(this.context.userInterests)
        this.context.userInterests.map((interest) => {
            if (interest === val) {
                return true
            }
        })
        return false
    }

    handleRenderInterests = (interest, checked) => {
        console.log(checked)
        if (!checked) {
            return (
                <>
                    <label htmlFor={interest}>{interest}</label>
                    <input id={interest} type="checkbox" ></input>
                </>
            )
        } else if (checked) {
            return (
                <>
                    <label htmlFor={interest}>{interest}</label>
                    <input id={interest} type="checkbox" checked ></input>
                </>
            )
        }
    }
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
                        {this.interests.map((interest) => {
                            return (
                                this.handleRenderInterests(interest, this.handleAlreadyChecked(interest)))
                        })}
                        <div className='submit-button'>
                            <button
                                //submit handler is called in form tag
                                onClick={() => this.props.history.push('/dashboard')}
                            >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
