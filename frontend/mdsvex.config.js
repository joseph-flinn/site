import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkMath from 'remark-math';
//import rehypeKatex from 'rehype-katex';
import rehypeKatexSvelte from 'rehype-katex-svelte';

import { 
	remarkInlineCodeStyle,
	remarkTableCell,
	remarkTableWrap
} from './src/lib/renderers/remark-plugins.js';


const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		blog: "./src/lib/layouts/mdsvex/blog-layout.svelte",
		_: "./src/lib/layouts/mdsvex/blog-layout.svelte",
	},
	remarkPlugins: [
		remarkMath,
		remarkInlineCodeStyle,
		remarkTableCell,
		remarkTableWrap
	],
	rehypePlugins: [
		rehypeKatexSvelte,
		//rehypeKatex
	],
})


export default config;
