import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import Header from './Header';
import TextInput from './TextInput';

describe('TextInput (Unit-Test)', () => {
  let wrapper: ShallowWrapper;

  const onChange = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<TextInput onchange={onChange} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('onchange should executed', () => {
    wrapper.find('TextInput').first().simulate('changeText', 'test');
    expect(onChange).toBeCalledWith('test');
  });
});
