import { createApi } from 'unsplash-js';
import { UNSPLASH_ACCESS_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const serializeNonPOJOs = (value: object | null) => {
		return structuredClone(value);
	};

	const unsplash = createApi({
		accessKey: UNSPLASH_ACCESS_KEY
	});
	try {
		const data = await unsplash.search.getPhotos({ query: params.slug, page: 1, perPage: 20 });
		if (data.type === 'success') {
			return {
				data: serializeNonPOJOs(data)
			};
		}
	} catch (err) {
		error(418, `${err}`);
	}
}
