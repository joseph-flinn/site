<script>
  export let text = null; 
  export let handleClick;
</script>


<button on:click={handleClick}>
  {text}
</button>


<style>
  button {
    margin-left: auto;
    padding: 0.5em 1.5em 0.5em 1.5em;
    color: #fffefb;
    background-color: #5c5955; 
    text-align: center;
    border-radius: 5px;
    border: none;
  }

  button:hover {
    cursor: pointer;
    background-color: #777;
  }
</style>
