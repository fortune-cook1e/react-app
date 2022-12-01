export default {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  verbose: true,
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleNameMapper: {
    // '\\.(css|less|sass|scss|stylus)$': require.resolve('identity-obj-proxy'),
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  moduleDirectories: ['node_modules']
}
