import { describe, expect, it } from "vitest";
import { isValidEmail, isValidSku } from "../src/validate";

describe("isValidEmail", () => {
	it("accepts valid emails", () => {
		expect(isValidEmail("user@example.com")).toBe(true);
	});

	it("rejects invalid emails", () => {
		expect(isValidEmail("not-an-email")).toBe(false);
		expect(isValidEmail("@missing.user")).toBe(false);
		expect(isValidEmail("missing@.domain")).toBe(false);
	});
});

describe("isValidSku", () => {
	it("accepts valid SKUs", () => {
		expect(isValidSku("PROD-001")).toBe(true);
		expect(isValidSku("abc123")).toBe(true);
	});

	it("rejects invalid SKUs", () => {
		expect(isValidSku("has spaces")).toBe(false);
		expect(isValidSku("special@chars")).toBe(false);
	});
});
