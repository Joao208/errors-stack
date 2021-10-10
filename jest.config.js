module.exports = {
  name: "errors-stack",
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 80,
      lines: 0,
      statements: 0,
    },
  },
  collectCoverageFrom: [
    "**/src/**/*.ts",
    "!**/**/models/**/index.ts",
    "!**/**/models/**/schema.ts",
    "!**/**/config/**",
    "!src/app.ts",
    "!**/helpers/initSentry/index.ts",
    "!**/helpers/setupShutdown/index.ts",
    "!**/helpers/initMongoDB/index.ts",
    "!**/**/middlewares/requestLogger/index.ts",
  ],
  testEnvironment: "node",
  coveragePathIgnorePatterns: ["routes"],
  testMatch: ["**/**/**/*.test.ts"],
  coverageDirectory: "./coverage",
  clearMocks: true,
  restoreMocks: true,
  reporters: ["default"],
};
