import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import Header from './Header';

describe('Header (Unit-Test)', () => {
  let wrapper: ShallowWrapper;

  const navigation = {
    navigate: jest.fn(),
    openDrawer: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<Header navigation={navigation} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('openDrawer function should executed', () => {
    wrapper.find('TouchableOpacity').first().simulate('press');
    expect(navigation.openDrawer).toBeCalled();
  });
});
