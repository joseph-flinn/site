<script>
  export let data;
  import PageTitle from '$lib/components/PageTitle.svelte';
  import DripTable from '$lib/components/DripTable.svelte';

  const headers = ['date', 'drop']
</script>


<PageTitle name="Drips"/>
<DripTable headers={headers} data={data} />

