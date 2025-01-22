<script>
    export let diagram;
    import mermaid from 'mermaid';

    let container;

    async function renderDiagram() {
      const {svg} = await mermaid.render('mermaid', diagram)
      container.innerHTML=svg;
    }

    $: diagram && renderDiagram()
</script>

<div class="flex items-center justify-center">
  <span class="w-full" bind:this={container} />
</div>
