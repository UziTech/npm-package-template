/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	preset: "ts-jest",
	restoreMocks: true,
	clearMocks: true,
	// collectCoverage: true,
	collectCoverageFrom: [
		"src/**/*.ts",
		"!**/node_modules/**",
	],
	coverageDirectory: "coverage",
	coverageThreshold: {
		"global": {
			"branches": 100,
			"functions": 100,
			"lines": 100,
			"statements": 100,
		},
	},
	testRegex: /\.test\.tsx?$/.source,
	testEnvironment: "node",
};
