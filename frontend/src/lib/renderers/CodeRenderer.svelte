<script>
  export let lang;
  export let text;

  import katex from 'katex';

  import CodeDiagramRenderer from './CodeDiagramRenderer.svelte';
</script>


<pre class="flex w-full">
{#if lang == "katex"}
  <div class="grow">
    {@html katex.renderToString(text, {displayMode: true})}
  </div>
{:else if lang == "mermaid"}
  <div class="grow">
    <CodeDiagramRenderer diagram={text} />
  </div>
{:else}
    <code class="grow p-2 rounded-md overflow-x-auto bg-tin-200 text-xs">{text}</code>
{/if}
</pre>
