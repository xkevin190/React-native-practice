import 'react-native-gesture-handler/jestSetup';
import '@testing-library/jest-native/extend-expect';
import enableHooks from 'jest-react-hooks-shallow';

enableHooks(jest, {dontMockByDefault: true});

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});
