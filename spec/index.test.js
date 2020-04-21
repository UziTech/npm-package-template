const index = require("../src/index.js");

describe("index", () => {
	test("should be a function", () => {
		expect(index).toEqual(expect.any(Function));
	});
});
