<script>
  import PageTitle from "$lib/PageTitle.svelte";
  import Card from "$lib/Card.svelte";

  import MOCKDATA from '../data.js';
</script>


<PageTitle title="skills"/>
<Card>
  <ul>
    {#each MOCKDATA.skills.managerial as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</Card>


<style>
</style>
