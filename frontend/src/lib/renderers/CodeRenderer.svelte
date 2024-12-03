<script>
  export let lang;
  export let text;

  import katex from 'katex';

  import CodeDiagramRenderer from './CodeDiagramRenderer.svelte';
</script>


<pre style="width: 100%; display: flex;">
{#if lang == "katex"}
  <div style="flex-grow: 1;">
    {@html katex.renderToString(text, {displayMode: true})}
  </div>
{:else if lang == "mermaid"}
  <div style="flex-grow: 1;">
    <CodeDiagramRenderer diagram={text} />
  </div>
{:else}
    <code>{text}</code>
{/if}
</pre>


<style>
  code {
    flex-grow: 1;
    background: #eee;
    padding: 1em;
    overflow-x: auto;
  }
</style>
