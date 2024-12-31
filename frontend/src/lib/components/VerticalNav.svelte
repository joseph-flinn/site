<script>
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import logo from '$lib/assets/jf-icon.svg';

  import VerticalNavButton from '$lib/components/VerticalNavButton.svelte';
  import { token, cmsPath } from '$lib/store.js'


  const handleDrip = () => {
    goto(`${base}/cms/drip`)
  }

  const handleSettings = () => {
    goto(`${base}/cms/settings`)
  }

  const handleLogout = () => {
    token.set('');
    cmsPath.set('');

    goto(`${base}/cms/login`).then(() => {})
  }

  const buttons = {
    pages: [
      { name: "drip", handler: handleDrip},
    ],
    utilities: [
      { name: "Settings", handler: handleSettings},
      { name: "Logout", handler: handleLogout}
    ]
  }

</script>


<div class="flex flex-col h-full w-[300px] shrink-0 bg-tin-900 text-tin-100">
  <div class="p-2 mb-20">
  <a class="text-tin-100" href="{base}/">
    <img src={logo} alt="JF Brand Icon" class="w-20 h-20 svg"/>
  </a>
  </div>
  {#each buttons.pages as page}
    <VerticalNavButton name={page.name} handleClick={page.handler}/>
  {/each}
  <div class="mt-auto">
    {#each buttons.utilities as utility}
      <VerticalNavButton name={utility.name} handleClick={utility.handler}/>
    {/each}
  </div>
</div>

<style>
  .svg {
    filter: invert(100%) sepia(37%) saturate(894%) hue-rotate(333deg) brightness(115%) contrast(106%);
  }
</style>
