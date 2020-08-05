import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from './UserInfo';


jest.mock('./UserInfo')

describe('UserInfo', () => {
  it('renders UserInfo', () => {
    const wrapper = shallow(<UserInfo/>);
    expect(wrapper).toMatchSnapshot();
  });
});