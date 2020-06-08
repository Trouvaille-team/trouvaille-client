import React from 'react';
import ReactDOM from 'react-dom'
import LandingPage from './LandingPage'
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<LandingPage />);
});

it('displays welcome', () => {
  const wrapper = shallow(<LandingPage />);
  const welcome =
    <p>
      Here at Trouvaille, we believe that the best experiences are unplanned. Your most memorable moments are spontaneous.
      However, life doesn't always allow for that. For the times that you want great experiences that you are able to tell
      your friends and family about for years to come, but are on a schedule and need to plan things out, we are here for you!
      Trouvaille lets you pick your starting point and your destination, and fill in a quick survey of your preferences, including
      how often you are able to stop, how much time you can spend driving the wrong direction (because all the best stuff is off
      the beaten path), and, of course, your interests so that we show you locations that are relevant to you! Once that is done,
      we will map out a route for you to follow that lets you make those unforgettable memories, without all the worry of
      making it to your destination on time.
    </p>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it('displays onboarding', () => {
  const wrapper = shallow(<LandingPage />);
  const onboarding =
    <span>
      We hope you enjoy your road trip!
    </span>;
  expect(wrapper.contains(onboarding)).toEqual(true);
});