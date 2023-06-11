export function splitAndTruncateDID(did: string) {
	const didParts = did.split(":");

	if (didParts.length !== 3) {
		// Invalid DID format
		return null;
	}

	const type = didParts[1];
	const idStart = didParts[2].substring(0, 8); // Truncate ID to the first 8 characters
	const idEnd = didParts[2].substring(didParts[2].length - 8); // Truncate ID to the first 8 characters

	return `did:${type}:${idStart}...${idEnd}`;
}
