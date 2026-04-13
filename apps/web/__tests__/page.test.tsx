import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "../src/app/page";

describe("HomePage", () => {
	it("renders the heading", () => {
		render(<HomePage />);
		expect(screen.getByText("Zapp Interview")).toBeDefined();
	});
});
