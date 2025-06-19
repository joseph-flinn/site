<script>
  export let data;

  import { onMount } from 'svelte';
  import mermaid from 'mermaid'

  //let styles = getComputedStyle(document.documentElement);

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

  //const { title, published, description, Content } = data;
  //const readEstimate = 0;
  //const wordCount = data.content.split(" ").reduce((sum, word) => sum += (word != "") ? 1 : 0, 0);
  //const readEstimate = Math.round( wordCount / 200)
</script>


<article class="prose prose-tin max-w-none">
  <svelte:component this={data.content} />
</article>
