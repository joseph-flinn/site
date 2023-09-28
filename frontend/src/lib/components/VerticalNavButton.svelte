<script>
  export let name;
  export let handleClick;
</script>


<div class="navButton" on:click={handleClick}>{name}</div>


<style>
  .navButton {
    padding: 1em 0.5em 1em 2em; 
    text-align: left;
    cursor: pointer;
  }

  .navButton:hover {
    opacity: 0.8;
    background-color: #4e4c48;
  }
</style>
