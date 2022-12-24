import * as React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import Home from './Home';
import enableHooks from 'jest-react-hooks-shallow';
import {View} from 'react-native';

enableHooks(jest, {dontMockByDefault: true});
describe('Home (Unit-Test)', () => {
  let wrapper: ShallowWrapper;

  //   const favoriteAction = jest.fn();
  const list = {
    aplication: {
      items: [
        {
          gender: 'test',
          name: 'test',
          birth_year: 'test',
          homeworld: 'test',
          favorite: false,
        },
      ],
    },
  };

  const store = {
    dispatch: jest.fn(),
    getState: jest.fn().mockReturnValue(list),
  };

  beforeEach(() => {
    wrapper = shallow(<Home store={store} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
