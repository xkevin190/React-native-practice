import 'react-native-gesture-handler/jestSetup';
import '@testing-library/jest-native/extend-expect';
import enableHooks from 'jest-react-hooks-shallow';
import * as mockRNLocalize from 'react-native-localize/mock';

/**
 * @tech-debt
 *
 * Fix codepush console log when running integration tests
 * "[CodePush] The CodePush module doesn't appear to be properly installed.
 * Please double-check that everything is setup correctly."
 */

const isIntegrationTest = process.env.TEST === 'test';

enableHooks(jest, { dontMockByDefault: isIntegrationTest });

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn().mockResolvedValue(Promise.resolve('test')),
  setItem: jest.fn().mockReturnValue(Promise.resolve(null)),
  removeItem: jest.fn().mockResolvedValue(Promise.resolve(null)),
}));

jest.mock('@react-native-firebase/messaging', () =>
  jest.fn(() => ({
    hasPermission: jest.fn(() => Promise.resolve(true)),
    subscribeToTopic: jest.fn(),
    unsubscribeFromTopic: jest.fn(),
    requestPermission: jest.fn(() => Promise.resolve(true)),
    getToken: jest.fn(() => Promise.resolve('myMockToken')),
    onNotificationOpenedApp: jest.fn(callback =>
      callback({
        notification: {
          title: 'test',
          body: 'test',
        },
        data: undefined,
      }),
    ),
    getInitialNotification: jest.fn(() =>
      Promise.resolve({
        notification: {
          title: 'test',
          body: 'test',
        },
        data: undefined,
      }),
    ),
    registerDeviceForRemoteMessages: jest.fn(() => Promise.resolve('test')),
    setAutoInitEnabled: jest.fn(() => Promise.resolve()),
    deleteToken: jest.fn(()=> Promise.resolve()),
    onMessage: jest.fn(callback =>
      callback({
        notification: {
          title: 'test',
          body: 'test',
        },
        data: undefined,
      }),
    ),
    onTokenRefresh: jest.fn(callback => callback('myMockToken')),
  })),
);

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-localize', () => mockRNLocalize);

jest.mock('react-native-push-notification', () => ({
  configure: jest.fn(),
  onRegister: jest.fn(),
  onNotification: jest.fn(),
  addEventListener: jest.fn(),
  requestPermissions: jest.fn(),
  createChannel: jest.fn(),
  Importance: {
    HIGH: 'test',
  },
}));

jest.mock('@react-native-community/push-notification-ios', () => ({
  FetchResult: {
    NoData: 'test',
  },
  removeAllDeliveredNotifications: jest.fn(),
}));

if (!isIntegrationTest) {
  jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn().mockReturnValue({
      navigate: jest.fn(),
      goBack: jest.fn(),
    }),
    useRoute: jest.fn().mockImplementation(route => route),
    useFocusEffect: jest.fn(),
  }));

  jest.mock('react-i18next', () => ({
    ...jest.requireActual('react-i18next'),
    useTranslation: jest.fn().mockReturnValue({
      t: jest.fn().mockImplementation((str: string) => str),
      i18n: {
        changeLanguage: jest.fn(),
      },
    }),
  }));

  jest.mock('react-native-code-push', () => ({
    NativeCodePush: {},
    SyncStatus: {
      UP_TO_DATE: 0,
      UPDATE_INSTALLED: 1,
      UPDATE_IGNORED: 2,
      UNKNOWN_ERROR: 3,
      SYNC_IN_PROGRESS: 4,
      CHECKING_FOR_UPDATE: 5,
      AWAITING_USER_ACTION: 6,
      DOWNLOADING_PACKAGE: 7,
      INSTALLING_UPDATE: 8,
    },
    restartApp: jest.fn(),
    checkForUpdate: jest.fn(),
    sync: jest.fn(),
  }));
}
