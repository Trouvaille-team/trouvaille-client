import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import Loading from './loading'
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Loading />);
});

it('displays the loading message', () => {
    const wrapper = mount(
        <BrowserRouter>
            <Loading />
        </BrowserRouter>
    );

    const message = <h1>Finding exciting new stories takes time! Please be patient with us!</h1>;
    
    expect(wrapper.contains(message)).toEqual(true);
});