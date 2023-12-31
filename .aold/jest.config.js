module.exports = {
    clearMocks: true,
    moduleFileExtensions: ['js', 'ts'],
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'],
    testRunner: 'jest-circus/runner',
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    verbose: true,
    collectCoverageFrom: ['src/**/*.ts'],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/dist/',
        '/test/',
        '/lib/',
        '/src/main.ts',
    ],
};
