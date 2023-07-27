<script>
  export let skillArea;
  export let skills;

  import Card from "$lib/Card.svelte";
  import Toggle from "$lib/Toggle.svelte";
</script>


<Card>
  <div style="display: flex;">
    <b style="padding: 0.25em; flex-grow: 1;">{skillArea}</b>
    <div style="padding: 0.25em;">
      <Toggle 
        on:click
        height="25px" 
        width="100px" 
        activeColor="#ccc" 
        inactiveColor="#ccc"
        animationTime="0s"
      />
    </div>
  </div>
  <ul>
    {#each skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</Card>
