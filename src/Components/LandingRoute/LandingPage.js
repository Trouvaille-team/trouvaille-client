import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ContextProvider from '../../Context'
// import { Spring } from 'react-spring/renderprops'


import './LandingPage.css'

class LandingPage extends Component {
  static contextType = ContextProvider

  componentDidMount() {
    let myVar = this;
    navigator.geolocation.getCurrentPosition(function (position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      myVar.context.setOriginCoords({ lat: latitude, lng: longitude })

    })
    if (localStorage.getItem("user_id")) {
      this.props.history.push("/dashboard")
    }

  }

  render() {
    return (
      // <Spring
      //   from={{ opacity: 0, marginTop: -500 }}
      //   to={{ opacity: 1, marginTop: 0 }}>
      //   {props =>
         <div className="landing-page">          <p>
          Here at Trouvaille, we believe that the best experiences are unplanned. Your most memorable moments are spontaneous.
          However, life doesn't always allow for that. For the times that you want great experiences that you are able to tell
          your friends and family about for years to come, but are on a schedule and need to plan things out, we are here for you!
          Trouvaille lets you pick your starting point and your destination, and fill in a quick survey of your preferences, including
          how often you are able to stop, how much time you can spend driving the wrong direction (because all the best stuff is off
          the beaten path), and, of course, your interests so that we show you locations that are relevant to you! Once that is done,
          we will map out a route for you to follow that lets you make those unforgettable memories, without all the worry of
          making it to your destination on time.
          </p>
          {/* <p>
            When you get started, we will ask you to tell us some of your preferences, then, if you want to save your information you can
            sign up for an account or login if you already have one. If you choose to continue without signing up, you will be taken to a
            page to create a new trip.  We will ask for how many stops you want to make, how far out of the way you are willing to go and
            how long you have to get to your destination. After that we will present you with a few location options for your detours,
            then we will provide you with the map of your route based on your selections! If you signed up with us, all this information will
            be saved for you so you can see it again. It will also streamline the process so that next time, you can jump straight into
            building a new route.  Didn't like our options for detours? Going with a new person who has different tastes? No worries! When
            you have an accout, we offer you the option to change your preferences so you can tailor each trip to suit your needs.
          </p> */}
          <span>
            We hope you enjoy your road trip!
          </span>

          <Link to='/interests'>Let's Get Started!</Link></div>
      // {/* </Spring> */}
    )
  }
}

export default LandingPage;