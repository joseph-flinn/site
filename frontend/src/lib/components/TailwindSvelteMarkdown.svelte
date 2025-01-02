<script>
  export let source;

  import SvelteMarkdown from 'svelte-markdown';

  import CodeRenderer from '$lib/renderers/CodeRenderer.svelte';
  import ImageRenderer from '$lib/renderers/ImageRenderer.svelte';
  import ParagraphRenderer from '$lib/renderers/ParagraphRenderer.svelte';
  import QuoteRenderer from '$lib/renderers/QuoteRenderer.svelte';
  import TableRenderer from '$lib/renderers/TableRenderer.svelte';
  import TableHeadRenderer from '$lib/renderers/TableHeadRenderer.svelte';
  import TableBodyRenderer from '$lib/renderers/TableBodyRenderer.svelte';
  import TableRowRenderer from '$lib/renderers/TableRowRenderer.svelte';
  import TableCellRenderer from '$lib/renderers/TableCellRenderer.svelte';
</script>

<SvelteMarkdown 
  source={source} 
  renderers={{ 
    blockquote: QuoteRenderer,
    code: CodeRenderer,
    image: ImageRenderer,
    paragraph: ParagraphRenderer,
    table: TableRenderer,
    tablehead: TableHeadRenderer,
    tablecell: TableCellRenderer
  }}
/>
