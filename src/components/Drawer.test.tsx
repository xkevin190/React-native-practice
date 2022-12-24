import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import Drawer from './Drawer';
import {View} from 'react-native';

describe('Drawer (Unit-Test)', () => {
  let wrapper: ShallowWrapper;

  const navigation = {
    navigate: jest.fn(),
    closeDrawer: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<Drawer navigation={navigation} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('closeDrawer function should executed', () => {
    wrapper.find('TouchableOpacity').first().simulate('press');
    expect(navigation.closeDrawer).toBeCalled();
  });

  it(' should navigate to "Characters" screen', () => {
    console.log(wrapper.debug());
    wrapper.find('TouchableOpacity').at(1).simulate('press');
    expect(navigation.navigate).toBeCalledWith('Home');
  });

  it(' should navigate to "Favorites" screen', () => {
    console.log(wrapper.debug());
    wrapper.find('TouchableOpacity').at(2).simulate('press');
    expect(navigation.navigate).toBeCalledWith('Favorites');
  });
});
