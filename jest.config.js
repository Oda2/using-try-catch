module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // coverageProvider: 'babel',
  collectCoverageFrom: [
    './src/**/*.ts',
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ]
};
