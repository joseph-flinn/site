<script>
  import PageTitle from '$lib/components/PageTitle.svelte';
  import DripTable from '$lib/components/DripTable.svelte';

  const headers = ['date', 'drip']
  const data = [
    {id: 0, date: "2023-01-01T00:00:00", drop: "lorem ipsum...."},
    {id: 1, date: "2023-02-02T01:01:01", drop: "lorem ipsum...."}
  ]
</script>


<PageTitle name="Drips"/>
<DripTable headers={headers} data={data} />

