import React, { Component } from 'react'

export default class Interests extends Component {
    

    render() {
        return (
            <div>
                <header className="interests-header">
                    { /* have the heading display the users name */}
                    <h1>What does the user like to do when travelling?</h1>
                    <section>
                        <p>Help us get an idea of what you like to partake in when travelling! Check those that apply to you.</p>
                    </section>
                </header>
                <div>
                    <form className="interests-form">
                        <label htmlFor="camping">Camping</label>
                        <input id="camping" type="checkbox" ></input>
                        <label htmlFor="hiking">Hiking</label>
                        <input id="hiking" type="checkbox" ></input>
                        <label htmlFor="beaches">Beaches</label>
                        <input id="beaches" type="checkbox"></input>
                        <label htmlFor="breweries">Breweries/Wineries</label>
                        <input id="breweries" type="checkbox"></input>
                        <label htmlFor="museums">Museums</label>
                        <input id="museums" type="checkbox"></input>
                        <label htmlFor="novelty">Novelty</label>
                        <input id="novelty" type="checkbox"></input>
                        <label htmlFor="military">Military/Memorials/Battlefields</label>
                        <input id="military" type="checkbox"></input>
                        <label htmlFor="monuments">Monuments/Landmarks</label>
                        <input id="monuments" type="checkbox"></input>
                        <label htmlFor="parks">Parks</label>
                        <input id="parks" type="checkbox"></input>
                        <label htmlFor="zoos">Zoos</label>
                        <input id="zoo" type="checkbox"></input>
                        <label htmlFor="amusement">Amusement Parks</label>
                        <input id="amusement" type="checkbox"></input>                        
                        <label htmlFor="haunted">Haunted</label>
                        <input id="haunted" type="checkbox"></input>
                        <div>
                            <button 
                            type='submit'
                            onClick={() => this.props.history.push('/dashboard')}
                            >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
