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
  <table class="p-6 border-spacing-0">
    <tr>
      <th class='p-4 w-[200px] border-0 text-left'>timestamp</th>
      <th class='p-4 border-0 text-left'>drop</th>
    </tr>
    {#each data.data as datum}
      <tr class="hover:bg-tin-200 hover:cursor-pointer" on:click={() => handleDripClick(datum.id)}>
        <td class="p-4 border-0 align-top" >{datum.created_at}</td>
        <td class="p-4 border-0 align-top">{datum.message}</td>
      </tr>
    {/each}
  </table>
</Card>
