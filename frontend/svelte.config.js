import adapter from  '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

import { 
	remarkInlineCodeStyle,
	remarkTableCell,
	remarkTableWrap
} from './src/lib/renderers/remark-plugins.js';

const dev = process.argv.includes('dev');

const base = '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [
		'.svelte', 
		'.md'
	],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			fallback: 'index.html',
			strict: true,
		}),		
    prerender: {
			entries: [
				"*",
				//"/api/posts/page/*",
        "/posts/",
        "/posts/*",
			],
		},
		paths: {
			base: dev ? '' : base,
		}
	},
	preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
			layout: {
				blog: "./src/lib/layouts/mdsvex/blog-layout.svelte",
				_: "./src/lib/layouts/mdsvex/blog-layout.svelte",
			},
			remarkPlugins: [
				remarkInlineCodeStyle,
				remarkTableCell,
				remarkTableWrap
			]
    })
	]
};

export default config;
