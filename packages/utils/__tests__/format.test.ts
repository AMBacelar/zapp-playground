import { describe, expect, it } from "vitest";
import { formatCurrency, formatDate } from "../src/format";

describe("formatCurrency", () => {
	it("formats cents to dollar string", () => {
		expect(formatCurrency(1999)).toBe("$19.99");
	});

	it("formats zero", () => {
		expect(formatCurrency(0)).toBe("$0.00");
	});

	it("formats large amounts", () => {
		expect(formatCurrency(100000)).toBe("$1000.00");
	});
});

describe("formatDate", () => {
	it("formats a Date object", () => {
		const result = formatDate(new Date("2025-01-15"));
		expect(result).toContain("2025");
		expect(result).toContain("Jan");
	});

	it("formats a date string", () => {
		const result = formatDate("2025-06-01");
		expect(result).toContain("2025");
	});
});
