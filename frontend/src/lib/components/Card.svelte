<script>
  export let title = null;
</script>

<div class="flex flex-column bg-white mx-4 p-1 rounded-sm shadow-lg">
  {#if title}
  <b class="p-2">{title}</b>
  {/if}
  <slot/>
</div>
