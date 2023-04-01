<script>
  export let pages;

  import {base} from "$app/paths";

</script>

<div>
  {#each pages as page}
  <a href="{base}/{page.path}"><b>{page.name}</b></a>
  {/each}
</div>

<style>
  a {
    padding: 1em;
    text-decoration: none;
    color: #5c5955;
  }
</style>

