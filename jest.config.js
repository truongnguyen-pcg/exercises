module.exports = {
  browser: false,
  verbose: true,
  testEnvironment: 'node',
  reporters: ['default'],
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 10,
      lines: 20,
      statements: 20,
    },
  },
};
