import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  verbose: true,
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/'],
  // transformIgnorePatterns: ['/node_modules/(?!(@fe-cookie/client-request-crypto | sort-keys)/)'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testMatch: ['**/__test__/**/*.test.(js|jsx|ts|tsx)'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss|stylus)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  moduleDirectories: ['node_modules']
}

export default config
