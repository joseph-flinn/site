<script>
  export let data;

  import SvelteMarkdown from 'svelte-markdown';

  import { log } from '$lib/utils/logger.js';
  import CodeRenderer from '$lib/renderers/CodeRenderer.svelte';
  import ImageRenderer from '$lib/renderers/ImageRenderer.svelte';
  import ParagraphRenderer from '$lib/renderers/ParagraphRenderer.svelte';
  import QuoteRenderer from '$lib/renderers/QuoteRenderer.svelte';
  import TableRenderer from '$lib/renderers/TableRenderer.svelte';
  import TableHeadRenderer from '$lib/renderers/TableHeadRenderer.svelte';
  import TableBodyRenderer from '$lib/renderers/TableBodyRenderer.svelte';
  import TableRowRenderer from '$lib/renderers/TableRowRenderer.svelte';
  import TableCellRenderer from '$lib/renderers/TableCellRenderer.svelte';

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
      blockquote: QuoteRenderer,
      code: CodeRenderer,
      image: ImageRenderer,
      paragraph: ParagraphRenderer,
      table: TableRenderer
    }}
  />
</div>

