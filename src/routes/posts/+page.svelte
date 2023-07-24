<script>
  export let data;

  import { page } from '$app/stores';  
  import PageTitle from "$lib/PageTitle.svelte";

  const posts = data.forEach(post => {

  })
</script>


<PageTitle name="posts"/>
<div style="padding: 1em;">
{#each Object.entries(data) as [key, value]}
  <div class="post-item">
    <a href="{$page.url.pathname}/{key}">{value.date} - {value.title}</a>
  </div>
{/each}
</div>


<style>
  .post-item {
    padding: 0.5em;
  }

  a:hover {
    font-weight: 700;
  }
</style>
