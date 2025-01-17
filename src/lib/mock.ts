export function mockApiRequest(success: boolean): Promise<string> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (success) {
				resolve('Request succeeded!');
			} else {
				reject(new Error('Request failed.'));
			}
		}, 2000); // Simulate network delay
	});
}
