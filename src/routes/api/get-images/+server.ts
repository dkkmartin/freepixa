import { createApi } from 'unsplash-js';
import { UNSPLASH_ACCESS_KEY } from '$env/static/private';
import { error, json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { query, page } = await request.json();
	const unsplash = createApi({
		accessKey: UNSPLASH_ACCESS_KEY
	});

	try {
		const data = await unsplash.search.getPhotos({
			query: query,
			page: page,
			perPage: 10
		});

		if (data.type === 'success') {
			return json(data.response.results);
		} else {
			throw new Error(data.errors[0]);
		}
	} catch (err) {
		error(418, `${err}`);
	}
}
