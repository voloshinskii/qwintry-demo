export default function generateUniqueId() {
	return (
		new Date().getTime().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15)
	);
}