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
<div class="absolute h-full w-full flex">
  <VerticalNav />
  <div class="flex flex-col grow">
    <div class="h-14 bg-tin-200"/>
    <slot></slot>
  </div>
</div>
{/if}
