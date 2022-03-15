/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: "src",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(j|t)sx?$"
};