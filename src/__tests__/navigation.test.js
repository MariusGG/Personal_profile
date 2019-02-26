import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../nav/navigation';

describe ('Navigation', () =>{

  let wrapper

  beforeAll(() =>{
    wrapper = shallow(<Navigation />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a nav component', () => {
    const nav = wrapper.find('nav')
    expect(nav.length).toEqual(1)
  })

  it('renders four Routes', () => {
    const routes = wrapper.find('Route')
    expect(routes.length).toEqual(4)
  })

})
