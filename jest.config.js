module.exports = {
  verbose: true,
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: [
    "js",
  ],
  testMatch: ['<rootDir>/**/**/*.test.(js|jsx|ts|tsx)'],
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  transformIgnorePatterns: [
    // Change MODULE_NAME_HERE to your module that isn't being compiled
    "/node_modules/.+\\.js$"
  ]
};
