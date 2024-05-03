import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess({})],
	kit: {
		prerender: {
			handleHttpError: ({ path, message }) => {
				if (path === '/favicon.png') {
					return; // Ignore the 404 error for the favicon.png file
				}

				throw new Error(message); // Otherwise fail the build
			}
		},
		adapter: adapter({
			edge: true
		})
	}
};

export default config;
