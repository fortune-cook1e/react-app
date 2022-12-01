export default {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleNameMapper: {
    // '\\.(css|less|sass|scss|stylus)$': require.resolve('identity-obj-proxy'),
    // '^@/(.*)$': '<rootDir>/src/$1'
    // '^@@/(.*)$': '<rootDir>/src/.umi/$1'
  }
}
