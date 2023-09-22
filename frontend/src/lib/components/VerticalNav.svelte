<script>
  export let pages;

  import { base } from "$app/paths";
  import logo from "$lib/assets/jf-icon.svg"
</script>


<div class="vbar">
  <div style="padding: 1em; margin-bottom: 5em;">
  <a href="{base}/">
    <img src={logo} alt="JF Brand Icon" class="svg"/>
  </a>
  </div>
  <div class="vritem" style="text-align: right;">
    {#each pages as page}
      <div>{page.name}</div>
    {/each}
  </div>
  <div style="margin-top: auto">
    <div class="vlitem">Settings</div>
    <div class="vlitem">Logout</div>
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

  .vlitem {
    padding: 0.5em; 
    margin-left: 1.5em;
    text-align: left;
  }

  .vritem {
    padding: 0.5em; 
    margin-right: 1.5em;
    text-align: right;
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
