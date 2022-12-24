module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/config/enzyme.ts'],
  setupFilesAfterEnv: ['<rootDir>/config/jest.setup.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'text-summary'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 95,
      statements: 95,
    },
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(test}).[jt]s?(x)'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/styles.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/src/**/*.test.{ts,tsx}',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation)',
  ],
};
