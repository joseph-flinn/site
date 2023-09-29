<script>
  export let headers;
  export let data;

  import { goto } from "$app/navigation";
  import { base } from '$app/paths';

  import Card from '$lib/components/Card.svelte';
  import { dropEdit } from '$lib/store.js';

  const handleDripClick = (id) => {
    console.log(`clicked row ${id}`)
    dropEdit.set(data.filter(datum => datum.id === id)[0])
    goto(`${base}/cms/drips/${id}`)
  }
</script>


<Card>
  <table>
    <tr>
      <th style="width: 200px">date</th>
      <th>drip</th>
    </tr>
    {#each data as datum}
      <tr class="row" on:click={handleDripClick(datum.id)}>
        <td>{datum.date}</td>
        <td>{datum.drop}</td>
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
    border-bottom: 1px solid #555;
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
</style>
