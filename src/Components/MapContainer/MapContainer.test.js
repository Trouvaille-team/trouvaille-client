import React from 'react';
import MapContainer from './MapContainer';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<MapContainer />);
  });
