<script>
  import PageTitle from '$lib/components/PageTitle.svelte';
  import UnderConstruction from '$lib/components/UnderConstruction.svelte';
  import { dropEdit } from '$lib/store.js';


  let drop = {}

  dropEdit.subscribe((value) => {
    drop = value
  })
</script>


<PageTitle name='Drop'/>
<UnderConstruction/>
{JSON.stringify(drop)}
