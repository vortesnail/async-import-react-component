module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['src/*.{js,tsx,ts}', 'src/**/*.{js,tsx,ts}'],
}
