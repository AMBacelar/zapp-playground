export function isValidEmail(email: string): boolean {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidSku(sku: string): boolean {
	return /^[A-Za-z0-9-]+$/.test(sku);
}
