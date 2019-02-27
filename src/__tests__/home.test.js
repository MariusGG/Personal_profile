import React from 'react';
import { shallow } from 'enzyme';
import Home from '../pages/home';

describe('Home', () =>{

  let wrapper

  beforeAll(() => {
    wrapper = shallow(<Home />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('it renders the div', () =>{
    const div = wrapper.find('div')
    expect(div.length).toEqual(1)
  })

  it('renders the p tag', () => {
    const paragraph = wrapper.find('[className="short-about-me"]')
    expect(paragraph.length).toEqual(1);
  })

  it('renders the icons component', () => {
    const icons = wrapper.find('Icons')
    expect(icons.length).toEqual(1)
  })

})
