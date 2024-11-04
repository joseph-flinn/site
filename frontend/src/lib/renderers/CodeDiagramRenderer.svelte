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

<div style="display: flex; align-items: center; justify-content: center;">
  <span style="width: 100%;" bind:this={container} />
</div>
