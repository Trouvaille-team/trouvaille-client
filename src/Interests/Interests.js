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
                        <label htmlFor="camping">Camping</label>
                        <input id="camping" type="checkbox"></input>
                        <label htmlFor="museums">Museums</label>
                        <input id="museums" type="checkbox"></input>
                        <label htmlFor="novelty">Novelty</label>
                        <input id="novelty" type="checkbox"></input>
                        <label htmlFor="historic">Historic</label>
                        <input id="historic" type="checkbox"></input>
                    </form>
                </div>
            </div>
        )
    }
}
