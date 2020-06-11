import React from 'react';
import WaypointsSelect from './WaypointsSelect';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<WaypointsSelect />);
  });
