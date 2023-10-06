<script>
  export let data;
  import { goto } from "$app/navigation";
  import { base } from '$app/paths';

  import Button from '$lib/components/Button.svelte';
  import PageTitle from '$lib/components/PageTitle.svelte';
  import DripTable from '$lib/components/DripTable.svelte';
  import { dropEdit } from '$lib/store.js';

  const handleNewClick = () => {
    dropEdit.set({ id: 'new', message: '' })
    goto(`${base}/cms/drip/new`)
  }
</script>


<PageTitle name='Drip'/>
<div class='newButtonContainer'>
  <Button 
    text='+ New' 
    handleClick={handleNewClick} 
    class='newButton'
  />
</div>
<DripTable data={data} />


<style>
  .newButtonContainer {
    margin-left: auto;
    padding: 1em;
  }
</style>

