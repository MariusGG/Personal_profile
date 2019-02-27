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

  // it('renders the main image', () => {
  //   const image = wrapper.find('img')
  //    expect(image.src).toMatchSnapshot('D150_8017.jpg')
  // })
  it('render some text', () => {
    expect(wrapper.find('[className="sht-about"]').text().toEqual("I’m a full stack software developer")).toEqual(true);
  })
})
