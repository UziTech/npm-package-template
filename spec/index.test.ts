import { describe, test } from "node:test";
import assert from "node:assert/strict";
import index from "../src/index.ts";

describe("index", () => {
	test("should return undefined", () => {
		assert.strictEqual(index(), void 0);
	});
});

