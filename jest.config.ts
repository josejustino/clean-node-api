/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'

const config: Config = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/**/*-protocols.ts/**',
    '!<rootDir>/src/**/protocols/**',
    '!<rootDir>/src/test/**'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  passWithNoTests: true,
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

export default config
