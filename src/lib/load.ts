import type { ServerLoad, ServerLoadEvent } from '@sveltejs/kit';
import { mockApiRequest } from './mock';

export function exampleLoadFunc(load?: ServerLoad) {
	if (!load) {
		return async (event: ServerLoadEvent) => {
			const result = await mockApiRequest(true);
			return { result };
		};
	}
	return async (event: ServerLoadEvent) => {
		const result = await mockApiRequest(true);
		const data = (await load(event)) ?? {};
		data.result = result;
		return data;
	};
}
