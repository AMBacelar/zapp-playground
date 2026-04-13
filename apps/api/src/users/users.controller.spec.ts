import { Test } from "@nestjs/testing";
import { describe, expect, it, vi } from "vitest";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

describe("UsersController", () => {
	it("should return all users", async () => {
		const mockUsers = [
			{ id: 1, name: "Alice", email: "alice@example.com" },
			{ id: 2, name: "Bob", email: "bob@example.com" },
		];

		const module = await Test.createTestingModule({
			controllers: [UsersController],
			providers: [
				{
					provide: UsersService,
					useValue: { findAll: vi.fn().mockReturnValue(mockUsers) },
				},
			],
		}).compile();

		const controller = module.get(UsersController);
		expect(controller.findAll()).toEqual(mockUsers);
	});
});
