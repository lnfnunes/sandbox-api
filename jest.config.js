module.exports = {
  testEnvironment: 'node',
  clearMocks: true,
  setupFiles: ['<rootDir>/__mocks__/jest.setup.js'],
  testMatch: ['**/[Tt]est(*).js?(x)', '**/__tests__/**/*.js?(x)'],
  collectCoverageFrom: ['<rootDir>/src/**/*.js', '!**/node_modules/**', '!**/coverage/**', '!**/routes/**'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
}
