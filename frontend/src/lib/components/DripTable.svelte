<script>
  export let data;

  import { goto } from "$app/navigation";
  import { base } from '$app/paths';

  import Card from '$lib/components/Card.svelte';
  import { dropEdit } from '$lib/store.js';

  const handleDripClick = (id) => {
    console.log(`clicked row ${id}`)
    dropEdit.set(data.data.filter(datum => datum.id === id)[0])
    goto(`${base}/cms/drip/${id}`)
  }

  const drip = data.data.sort((dropA, dropB) => new Date(dropA.timestamp) > new Date(dropB.timestamp) ? -1 : 1)
</script>


<Card>
  <table>
    <tr>
      <th style="width: 200px">timestamp</th>
      <th>drop</th>
    </tr>
    {#each data.data as datum}
      <tr class="row" on:click={() => handleDripClick(datum.id)}>
        <td>{datum.created_at}</td>
        <td>{datum.message}</td>
      </tr>
    {/each}
  </table>
</Card>


<style>
  table {
    padding: 1.5em;
    border-spacing: 0px;
  }

  td, th {
    padding: 1em;
    border: 0px;
  }

  .row {
  }

  .row:hover {
    background-color: #eee;
    cursor: pointer;
  }

  th {
    text-align: left;
  }

  td {
    vertical-align: top;
  }
</style>
