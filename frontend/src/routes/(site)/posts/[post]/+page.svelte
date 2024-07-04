<script>
  export let data;

  import SvelteMarkdown from 'svelte-markdown';

  import { log } from '$lib/utils/logger.js';
  import CodeComponent from '$lib/renderers/CodeComponent.svelte';
  import ImageComponent from '$lib/renderers/ImageComponent.svelte';
  import ParagraphComponent from '$lib/renderers/ParagraphComponent.svelte';
  import QuoteComponent from '$lib/renderers/QuoteComponent.svelte';

  const { title, published, body, ...rest } = data.data;

  const wordCount = body.split(" ").reduce((sum, word) => sum += (word != "") ? 1 : 0, 0);
  const readEstimate = Math.round( wordCount / 200)
</script>


<div style="width: 100%; text-align: center; font-size: 24px;">
  <div style="padding: 1em;">
    {title}
  </div>
</div>
<div style="display: flex; width: 100%;">
  <div style="flex-grow: 1; padding: 1em;">
    {published}
  </div>
  <div style="padding: 1em;">
    {readEstimate} mins
  </div>
</div>
<div style="padding: 1em;">
  <SvelteMarkdown 
    source={body} 
    renderers={{ 
      blockquote: QuoteComponent,
      code: CodeComponent,
      image: ImageComponent,
      paragraph: ParagraphComponent
    }}
  />
</div>
