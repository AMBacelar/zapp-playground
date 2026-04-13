import { describe, expect, it } from "vitest";
import app from "./index";

describe("Hono service", () => {
	it("GET / returns service info", async () => {
		const res = await app.request("/");
		expect(res.status).toBe(200);
		const body = await res.json();
		expect(body.status).toBe("ok");
		expect(body.name).toBe("@zapp/services");
	});
});
