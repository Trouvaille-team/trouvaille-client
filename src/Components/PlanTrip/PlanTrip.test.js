import React from 'react';
import PlanTrip from './PlanTrip';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<PlanTrip />);
  });
