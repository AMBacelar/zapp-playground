import { Test } from "@nestjs/testing";
import { describe, expect, it, vi } from "vitest";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

describe("ProductsController", () => {
	it("should return all products", async () => {
		const mockProducts = [
			{ id: 1, name: "Widget", price: 999, sku: "WDG-001" },
			{ id: 2, name: "Gadget", price: 1999, sku: "GDG-001" },
		];

		const module = await Test.createTestingModule({
			controllers: [ProductsController],
			providers: [
				{
					provide: ProductsService,
					useValue: { findAll: vi.fn().mockReturnValue(mockProducts) },
				},
			],
		}).compile();

		const controller = module.get(ProductsController);
		expect(controller.findAll()).toEqual(mockProducts);
	});
});
