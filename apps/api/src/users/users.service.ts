import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";

@Injectable()
export class UsersService {
	constructor(private readonly db: DatabaseService) {}

	findAll() {
		return this.db.query("SELECT * FROM users ORDER BY id ASC");
	}

	findById(id: number) {
		return this.db.get("SELECT * FROM users WHERE id = ?", [id]);
	}

	create(data: { name: string; email: string; phone?: string }) {
		const result = this.db.run(
			"INSERT INTO users (name, email, phone) VALUES (?, ?, ?)",
			[data.name, data.email, data.phone || null],
		);
		return this.db.get("SELECT * FROM users WHERE id = ?", [
			result.lastInsertRowid,
		]);
	}
}
