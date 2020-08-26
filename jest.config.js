module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: '(/__test__/.*\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleDirectories: ['node_modules', 'src'],
  coveragePathIgnorePatterns: ['node_modules'],
  collectCoverageFrom: ['src/*.{js,tsx,ts}', 'src/**/*.{js,tsx,ts}', '!**/__test__/**'],
}
