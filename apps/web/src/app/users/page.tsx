import { UserList } from "@/components/user-list";

export default function UsersPage() {
	return (
		<div>
			<h1 className="mb-6 text-2xl font-bold">Users</h1>
			<UserList />
		</div>
	);
}
