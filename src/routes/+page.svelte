<script>
  import PageTitle from "$lib/PageTitle.svelte";
  import Card from "$lib/Card.svelte";
  import Toggle from "$lib/Toggle.svelte";

  import { skills } from '../data.js';


  const handleToggle = () => {
  }
</script>


<div>
  <div style="width: 100%; padding: 3em 0em 3em 0em;"/>
  <div style="display: flex">
    <div class="titleWrapper">
      <PageTitle title="skills"/>
    </div>
    <div class="toggleWrapper">
      <Toggle 
        on:click={handleToggle}
        style="align: right;" 
        height="25px" 
        width="100px" 
        activeColor="#bbb" 
        inactiveColor="#ddd"
      />
    </div>
  </div>
  <Card>
    <ul>
      {#each skills.managerial as skill}
        <li>{skill}</li>
      {/each}
    </ul>
  </Card>
</div>


<style>
  .titleWrapper {
    display: inline-block;
    padding: 1em;
    flex-grow: 1;
  }

  .toggleWrapper {
    display: inline-block;
    float: right;
    padding: 1em;
  }
</style>
