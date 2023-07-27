<script>
  export let data = null;
  export let defaultTab = Object.keys(data)[0];
  export let justify = "left";

  import Card from "$lib/Card.svelte";

  let selectedTab = defaultTab;

  const handleClick = (tabName) => {
    selectedTab = tabName;
  }
</script>

<div class="tabs {justify === 'right' ? 'tabs-right' : 'tabs-left'}">
  {#each Object.keys(data) as tab}
    <div 
      class="tab-button {tab === selectedTab ? 'tab-active': ''}"
      on:click={() => handleClick(tab)}
    >
      {tab}
    </div>
  {/each}
</div>
<Card>
  <slot/>
  <ul>
    {#each data[selectedTab] as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</Card>


<style>
  .tabs {
    display: flex;
    padding: 0em 1em 0em 1em;
  }

  .tabs-left {
    justify-content: flex-start;
  }

  .tabs-right {
    justify-content: flex-end;
  }

  .tab-button {
    padding: 1em;
    cursor: pointer;
    background-color: #eee;
  }

  .tab-button:hover {
    background-color: #ddd;
  }

  .tab-active {
    background-color: #fff;
    border-top: 3px solid #ccc;
  }

  @media only screen and (max-width: 600px) {
    .tab-button:hover {
      background-color: #fff;
    }
  }
</style>
