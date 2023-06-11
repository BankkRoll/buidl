export function addHttpsPrefix(url?: string | null) {
	if (!url) return "";
	if (!url.startsWith("http://") && !url.startsWith("https://")) {
		const urlPrefixed = `https://${url}`;
		return urlPrefixed;
	}
	return url;
}
