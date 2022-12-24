import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import Container from './Container';

describe('Container (Unit-Test)', () => {
  let wrapper: ShallowWrapper;

  describe('general functionality', () => {
    beforeEach(() => {
      wrapper = shallow(<Container />);
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
