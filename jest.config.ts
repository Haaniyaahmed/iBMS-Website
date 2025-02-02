import nextJest from 'next/jest';

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  
  },
  modulePathIgnorePatterns: [
    '<rootDir>/e2e_tests/',
    '<rootDir>/.next/',
  ], 
};

export default createJestConfig(customJestConfig);
