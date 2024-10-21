<script>
  export let lang;
  export let text;

  import katex from 'katex';

  import CodeDiagramComponent from './CodeDiagramComponent.svelte';

</script>


<pre style="width: 100%; display: flex;">
{#if lang == "katex"}
  <div style="flex-grow: 1;">
    {@html katex.renderToString(text, {displayMode: true})}
  </div>
{:else if lang == "mermaid"}
  <div style="flex-grow: 1;">
    <CodeDiagramComponent diagram={text} />
  </div>
{:else}
  <code style="flex-grow: 1; background: #eee; padding: 1em;">
{text}
  </code>
{/if}
</pre>


