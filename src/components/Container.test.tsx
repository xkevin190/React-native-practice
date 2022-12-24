import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import Container from './Container';
import {View} from 'react-native';

describe('Container (Unit-Test)', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Container>
        <View testID="children" />
      </Container>,
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('children should be defined', () => {
    const result = wrapper
      .find('View')
      .at(1)
      .findWhere(node => node.prop('testID') === 'children')
      .exists();
     expect(result).toBe(true);
  });
});
