import adapter from  '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';


import { readingTimePreprocessor } from './src/lib/preprocessors/readingTime.js';
import mdsvexConfig from './mdsvex.config.js';

const dev = process.argv.includes('dev');

const base = '';

const config = {
	extensions: [
		'.svelte', 
		'.md',
		'.svx'
	],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			fallback: 'index.html',
			pages: 'build',
			assets: 'build',
			strict: true,
			precompress: false,
		}),
    prerender: {
			handleMissingId: 'warn',
			entries: [
				"*",
				"/about",
				"/posts",
				"/api/rss.xml"
			],
		},
		paths: {
			base: dev ? '' : base,
		}
	},
	preprocess: [
    vitePreprocess(),
		readingTimePreprocessor(),
    mdsvex(mdsvexConfig)
	]
};

export default config;
