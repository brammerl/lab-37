import React from 'react';
import { shallow } from 'enzyme';
import RepoDisplay from './RepoDisplay';


jest.mock('./RepoDisplay')

describe('RepoDisplay', () => {
  it('renders RepoDisplay', () => {
    const wrapper = shallow(<RepoDisplay />);
    expect(wrapper).toMatchSnapshot();
  });
});
  