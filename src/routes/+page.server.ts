import type { PageServerLoad } from './$types';

import { error } from '@sveltejs/kit';
import { createClient } from 'pexels';
import { PEXELS_API_KEY, UNSPLASH_ACCESS_KEY } from '$env/static/private';
import { createApi } from 'unsplash-js';

export const load: PageServerLoad = async () => {
	// const client = createClient(PEXELS_API_KEY);
	// const query = 'Nature';

	// return {
	// 	response: client.photos.search({ query, per_page: 3 })
	// };

	const serializeNonPOJOs = (value: object | null) => {
		return structuredClone(value);
	};

	const unsplash = createApi({
		accessKey: UNSPLASH_ACCESS_KEY
	});

	return {
		response: serializeNonPOJOs(await unsplash.photos.getRandom({ count: 1 }))
	};
};
