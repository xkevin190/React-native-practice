import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import List from './List';
import {View} from 'react-native';

describe('List (Unit-Test)', () => {
  let wrapper: ShallowWrapper;

  const favoriteAction = jest.fn();
  const list = [
    {
      gender: 'test',
      name: 'test',
      birth_year: 'test',
      homeworld: 'test',
      favorite: false,
    },
  ];

  beforeEach(() => {
    wrapper = shallow(<List ListItems={list} setFavorite={favoriteAction} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});