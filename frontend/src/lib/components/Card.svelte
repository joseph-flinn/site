<script>
  export let title = null;
</script>

<div class="card">
  {#if title}
  <b style="padding: 0.5em;">{title}</b>
  {/if}
  <slot/>
</div>


<style>
  .card {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin: 0em 1em 0em 1em;
    padding: 0.25em;
    border: 5px;
    border-color: #5c5955;
    border-radius: 2px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
</style>
