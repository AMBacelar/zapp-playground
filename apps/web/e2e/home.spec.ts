import { expect, test } from "@playwright/test";

test("home page loads", async ({ page }) => {
	await page.goto("/");
	await expect(page.getByText("Zapp Interview")).toBeVisible();
});

test("navigation links exist", async ({ page }) => {
	await page.goto("/");
	await expect(page.getByRole("link", { name: "Users" })).toBeVisible();
	await expect(page.getByRole("link", { name: "Products" })).toBeVisible();
});
