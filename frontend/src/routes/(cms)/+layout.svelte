<script>
  import { goto } from '$app/navigation';
  import { base } from "$app/paths";

  import data from '$lib/assets/data.json';
  import VerticalNav from '$lib/components/VerticalNav.svelte';
  import { token } from '$lib/store.js'

  let authToken = '';

  token.subscribe((value) => {
    if ( value === '' ) {
      goto(`${base}/cms/login`)
    }
    authToken = value;
  })

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
