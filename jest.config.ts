export default {
  bail: true,
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  testMatch: [
    "**/*.spec.ts",
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
};
