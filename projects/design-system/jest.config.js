module.exports = {
  preset: 'jest-preset-angular',
  // setupFilesAfterEnv: ["<rootDir>/projects/design-system/setup-jest.ts"],
  globalSetup: 'jest-preset-angular/global-setup',
  roots: ['<rootDir>/projects'],
  // moduleNameMapper: {
  //     "^~/(.*)$": '<rootDir>/src/$1',
  //     "^~assets/(.*)$": '<rootDir>/src/assets/$1',
  //     "^~config$": '<rootDir>/src/config/index.ts',
  //     "^~config/(.*)$": '<rootDir>/src/config/$1',
  //     "^~common/(.*)$": '<rootDir>/src/app/common/$1'
  // }
}
