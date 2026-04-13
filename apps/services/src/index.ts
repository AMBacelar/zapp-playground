import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
	return c.json({
		name: "@zapp/services",
		version: "0.0.0",
		status: "ok",
		timestamp: new Date().toISOString(),
	});
});

const port = Number(process.env.PORT) || 4993;

console.log(`Services running on http://localhost:${port}`);
serve({ fetch: app.fetch, port });

export default app;
