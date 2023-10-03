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


<div class="vbar">
  <div style="padding: 1em; margin-bottom: 5em;">
  <a href="{base}/">
    <img src={logo} alt="JF Brand Icon" class="svg"/>
  </a>
  </div>
  {#each buttons.pages as page}
    <VerticalNavButton name={page.name} handleClick={page.handler}/>
  {/each}
  <div style="margin-top: auto">
    {#each buttons.utilities as utility}
      <VerticalNavButton name={utility.name} handleClick={utility.handler}/>
    {/each}
  </div>
</div>

<style>
  .vbar {
    height: 100%;
    width: 300px;
    background-color: #5c5955; 
    color: #fffefb;
    display: flex; 
    flex-direction: column;
  }

  a {
    color: #fffefb;
  }

  .svg {
    width: 50px;
    height: 50px;
    filter: invert(100%) sepia(37%) saturate(894%) hue-rotate(333deg) brightness(115%) contrast(106%);
  }
</style>
