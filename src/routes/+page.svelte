<script>
  import PageTitle from "$lib/PageTitle.svelte";
  import Card from "$lib/Card.svelte";
  import Toggle from "$lib/Toggle.svelte";

  import { skillsData } from '../data.js';


  let toggleValue = true;
  let skillArea = skillsData[Number(toggleValue)].area;
  let skills = skillsData[Number(toggleValue)].skills;

  const handleToggle = () => {
    toggleValue = !toggleValue;
    skillArea = skillsData[Number(toggleValue)].area;
    skills = skillsData[Number(toggleValue)].skills;
    console.log(`handling toggle\n${skillArea}`);
  }
</script>


<div>
  <div style="width: 100%; padding: 2em 0em 2em 0em;"/>
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
        activeColor="#ccc" 
        inactiveColor="#ccc"
      />
    </div>
  </div>
  <Card title={skillArea}>
    <ul>
      {#each skills as skill}
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
