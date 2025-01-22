<script>
  export let name;
  export let handleClick;
</script>


<div 
    class="py-4 px-8 text-left hover:cursor-pointer hover:bg-tin-950 hover:opacity-80"
  on:click={handleClick}
>
  {name}
</div>
