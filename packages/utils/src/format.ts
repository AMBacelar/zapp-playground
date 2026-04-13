export function formatCurrency(cents: number): string {
	const dollars = cents / 100;
	return `$${dollars.toFixed(2)}`;
}

export function formatDate(date: Date | string): string {
	const d = typeof date === "string" ? new Date(date) : date;
	return d.toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}
