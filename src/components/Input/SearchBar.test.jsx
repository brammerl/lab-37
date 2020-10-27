import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

jest.mock('../../hooks/githubContext')


describe('SearchBar', () => {
  let wrapper;
  let main; 

  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
    main = wrapper.instance();
  })

  it('renders SearchBar', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
  