<script>
  export let title = null;
  export let fillWidth = false;
</script>

<div class="flex flex-col bg-white mx-4 p-1 rounded-sm shadow-lg {fillWidth ? 'w-full' : ''}">
  {#if title}
  <b class="p-2">{title}</b>
  {/if}
  <div class="p-2">
    <slot/>
  </div>
</div>
