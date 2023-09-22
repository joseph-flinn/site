<script>
  import VerticalNav from '$lib/components/VerticalNav.svelte';

  import data from '$lib/assets/data.json';
</script>

<div class="fullh-container">
  <VerticalNav pages={data.pages.cms} />
  <div style="display: flex; flex-direction: column; flex-grow: 1;">
    <div style="height: 50px; background-color: #eee;" />
    <slot></slot>
  </div>
</div>

<style>
  .fullh-container {
      position: absolute;
      height: 100%;
      width: 100%;
      display: flex;
  }
</style>
