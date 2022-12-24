import 'react-native-gesture-handler/jestSetup';
import '@testing-library/jest-native/extend-expect';
import enableHooks from 'jest-react-hooks-shallow';

const isIntegrationTest = process.env.TEST === 'test';

enableHooks(jest, {dontMockByDefault: isIntegrationTest});

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});
