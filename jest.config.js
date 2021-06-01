module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  collectCoverageFrom: [
    './src/**/*.ts',
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ]
};
