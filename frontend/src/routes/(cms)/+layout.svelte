<script>
  import { goto } from '$app/navigation'
  import { base } from "$app/paths"

  import VerticalNav from '$lib/components/VerticalNav.svelte'
  import { token, cmsPath } from '$lib/store.js'

  let authToken = ''

  token.subscribe((value) => {
    if ( value === '' ) {
      cmsPath.set(window.location.pathname)
      goto(`${base}/cms/login`)
    }
    authToken = value
  })

</script>

{#if authToken != ''}
<div class="fullh-container">
  <VerticalNav />
  <div style="display: flex; flex-direction: column; flex-grow: 1;">
    <div style="height: 50px; background-color: #E7E7E6;" />
    <slot></slot>
  </div>
</div>
{/if}

<style>
  .fullh-container {
      position: absolute;
      height: 100%;
      width: 100%;
      display: flex;
  }
</style>
