import adapter from '@sveltejs/adapter-auto';
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	plugins: [
		svelte({
			preprocess: sveltePreprocess()
		})
	]
};

export default config;
