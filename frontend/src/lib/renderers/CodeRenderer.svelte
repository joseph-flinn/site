<script>
  export let lang;
  export let text;

  import katex from 'katex';

  import CodeDiagramRenderer from './CodeDiagramRenderer.svelte';
</script>


<div class="flex">
{#if lang == "katex"}
  <div class="grow">
    {@html katex.renderToString(text, {displayMode: true})}
  </div>
{:else if lang == "mermaid"}
  <div class="grow p-4">
    <CodeDiagramRenderer diagram={text} />
  </div>
{:else}
  <pre class="flex w-full">
    <code class="grow p-2 rounded-md overflow-x-auto bg-tin-200 text-xs">{text}</code>
  </pre>
{/if}
</div>
