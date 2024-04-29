import { createApi } from 'unsplash-js';
import { UNSPLASH_ACCESS_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';

export async function load({ params, url }) {
	const page = url.searchParams.get('page') ?? 1;
	const serializeNonPOJOs = (value: object | null) => {
		return structuredClone(value);
	};

	const unsplash = createApi({
		accessKey: UNSPLASH_ACCESS_KEY
	});
	try {
		const data = await unsplash.search.getPhotos({
			query: params.slug,
			page: Number(page),
			perPage: 10
		});
		if (data.type === 'success') {
			return {
				params: params.slug,
				data: serializeNonPOJOs(data)
			};
		}
	} catch (err) {
		error(418, `${err}`);
	}
}
