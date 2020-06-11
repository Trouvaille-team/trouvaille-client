import React from 'react';
import Interests from './Interests';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Interests />);
  });
