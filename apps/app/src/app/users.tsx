import { formatDate } from "@zapp/utils";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { ListItem, Separator, Text, YStack } from "tamagui";

interface User {
	id: number;
	name: string;
	email: string;
	role: string;
	created_at: string;
}

const API_URL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:4992";

export default function UsersScreen() {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		fetch(`${API_URL}/users`)
			.then((res) => res.json())
			.then(setUsers)
			.catch(console.error);
	}, []);

	return (
		<YStack flex={1}>
			<FlatList
				data={users}
				keyExtractor={(item) => String(item.id)}
				ItemSeparatorComponent={() => <Separator />}
				renderItem={({ item }) => (
					<ListItem title={item.name} subTitle={item.email}>
						<Text fontSize="$2" color="$gray10">
							{item.role} · {formatDate(item.created_at)}
						</Text>
					</ListItem>
				)}
			/>
		</YStack>
	);
}
