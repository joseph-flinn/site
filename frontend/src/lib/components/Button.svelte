<script>
  export let text = null; 
  export let handleClick;
  export let primary = true;
</script>


<button 
  class="{primary ? 'buttonPrimary' : 'buttonSecondary'}"
  on:click={handleClick}
>
  {text}
</button>


<style>
  button {
    margin-left: auto;
    padding: 0.5em 1.5em 0.5em 1.5em;
    color: #fffefb;
    text-align: center;
    border-radius: 5px;
    border: none;
  }

  button:hover {
    cursor: pointer;
    background-color: #777;
  }

  .buttonPrimary {
    background-color: #5c5955; 
  }

  .buttonSecondary {
    background-color: #9b9894
  }

  .buttonPrimary:hover {
    background-color: #777;
  }

  .buttonSecondary:hover {
    background-color: #DAD9D7
  }
</style>
