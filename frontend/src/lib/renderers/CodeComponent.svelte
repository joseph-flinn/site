<script>
  export let lang;
  export let text;

  import katex from 'katex';

  import CodeDiagramComponent from './CodeDiagramComponent.svelte';

</script>


<pre style="width: 100%; display: flex;">
  <div style="flex-grow: 1;">
{#if lang == "katex"}
  {@html katex.renderToString(text, {displayMode: true})}
{:else if lang == "mermaid"}
  <CodeDiagramComponent diagram={text} />
{:else}
  <code style="background: #eee; padding: 1em;">
{text}
  </code>
{/if}
  </div>
</pre>


