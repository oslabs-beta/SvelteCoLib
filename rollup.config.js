import svelte from 'rollup-plugin-svelte';
import sveltePreprocess, { scss } from 'svelte-preprocess';

export default {
	plugins: [
		svelte({
			preprocess: [sveltePreprocess()]
		})
	]
};
