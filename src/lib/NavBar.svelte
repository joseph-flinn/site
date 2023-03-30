<script>
  export let pages;

</script>

<div>
  {#each pages as page}
  <a href={page.path}><b>{page.name}</b></a>
  {/each}
</div>

<style>
  a {
    padding: 1em;
    text-decoration: none;
    color: #5c5955;
  }
</style>

