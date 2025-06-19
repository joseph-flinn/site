<script>
  export let data;

  import { onMount } from 'svelte';
  import mermaid from 'mermaid'

  mermaid.initialize({
    theme: 'neutral',
    themeVariables: {
      background: '#FFFEFB',
      xyChart: {
        plotColorPalette: '#5C5955',
      },
    },
    startOnLoad: false 
  })

  onMount(() => {
    setTimeout(async () => {
      await mermaid.run()
    }, 0)
  })
</script>


<article class="prose prose-tin max-w-none">
  <svelte:component this={data.content} />
</article>
