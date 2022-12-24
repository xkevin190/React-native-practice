import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import Item from './Item';

describe('Item (Unit-Test)', () => {
  let wrapper: ShallowWrapper;

  const favoriteAction = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Item
        gender={'test'}
        name={'test'}
        birth_year={'test'}
        homeworld={'test'}
        favorite={false}
        action={favoriteAction}
      />,
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('the favorite icon should be disabled', () => {
    expect(wrapper.find('Icon').first().prop('name')).toBe('heart-outline');
  });

  it('the favorite icon should be actived', () => {
    wrapper = shallow(
      <Item
        gender={'test'}
        name={'test'}
        birth_year={'test'}
        homeworld={'test'}
        favorite={true}
        action={favoriteAction}
      />,
    );
    expect(wrapper.find('Icon').first().prop('name')).toBe('heart');
  });

  it('closeDrawer function should executed', () => {
    wrapper.find('TouchableOpacity').first().simulate('press');
    expect(favoriteAction).toBeCalledWith('test');
  });
});
