import svelte from 'rollup-plugin-svelte';
import autoPreprocess, { scss } from 'svelte-preprocess';

export default {
	plugins: [
		svelte({
			preprocess: [scss()]
		})
	]
};
