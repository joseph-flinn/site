<script>
  export let pages;

  import { base } from "$app/paths";
  import logo from "$lib/assets/jf-icon.svg";
</script>


<div style="display: flex; padding: 0.5em 0em 0.5em 0em;">
  <a href="{base}/">
    <img src={logo} alt="JF Brand Icon" class="svg"/>
  </a>
  <div style="padding: 0.5em;">
    {#each pages as page}
      <a href="{base}{page.path}"><b>{page.name}</b></a>
    {/each}
  </div>
</div>
<div class="spacer"/>

<style>
  .svg {
    width: 100px;
    height: 100px;
    filter: invert(35%) sepia(10%) saturate(215%) hue-rotate(355deg) brightness(93%) contrast(88%);
  }

  .spacer {
    width: 100%;
    padding: 1em 0em 1em 0em;
  }

  a {
    padding: 1em;
  }

  a:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 600px) {
    .svg {
      width: 50px;
      height: 50px;
    }
  }

  @media only screen and (max-width: 600px) {
    .spacer {
      padding: 0.25em 0em 0.25em 0em;
    }
  }
</style>

