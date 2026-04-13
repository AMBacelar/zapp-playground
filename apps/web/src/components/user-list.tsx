"use client";

import { formatDate } from "@zapp/utils";
import { useEffect, useState } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

interface User {
	id: number;
	name: string;
	email: string;
	phone: string | null;
	role: string;
	is_active: number;
	created_at: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4992";

export function UserList() {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		fetch(`${API_URL}/users`)
			.then((res) => res.json())
			.then(setUsers)
			.catch(console.error);
	}, []);

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>ID</TableHead>
					<TableHead>Name</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Phone</TableHead>
					<TableHead>Role</TableHead>
					<TableHead>Active</TableHead>
					<TableHead>Created</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{users.map((user) => (
					<TableRow key={user.id}>
						<TableCell>{user.id}</TableCell>
						<TableCell>{user.name}</TableCell>
						<TableCell>{user.email}</TableCell>
						<TableCell>{user.phone || "—"}</TableCell>
						<TableCell>{user.role}</TableCell>
						<TableCell>{user.is_active ? "Yes" : "No"}</TableCell>
						<TableCell>{formatDate(user.created_at)}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
