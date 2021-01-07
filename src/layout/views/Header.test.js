import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header'

describe('Header Component Test', () => {
    const component = shallow(<Header />);
    it('it should content 1 logo', () => {
        const logo = component.find('.App-logo')
        expect(logo.length).toBe(1);
    })
})