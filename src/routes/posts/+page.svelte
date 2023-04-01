<script>
  export let data;

  import { page } from '$app/stores';  
  import PageTitle from "$lib/PageTitle.svelte";
</script>


<PageTitle name="posts"/>
<ul>
  {#each Object.entries(data) as [key, value]}
    <li><a href="{$page.url.pathname}/{key}">{value.date} - {value.title}</a></li>
  {/each}
</ul>


<style>
  a:hover {
    font-weight: 700;
  }
</style>
