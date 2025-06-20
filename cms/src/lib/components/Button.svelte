<script>
  export let text = null; 
  export let handleClick;
  export let primary = true;
</script>


<button 
  class="ml-auto py-2 px-6 border-0 rounded-md text-center text-tin-100 hover:cursor-pointer {primary ? 'bg-tin-900 hover:bg-tin-700' : 'bg-tin-600 hover:bg-tin-400'}"
  on:click={handleClick}
>
  {text}
</button>
