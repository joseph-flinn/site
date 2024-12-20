<script>
  export let pages;

  import { base } from "$app/paths";
  import logo from "$lib/assets/jf-icon.svg";
</script>


<div class="flex py-2 gap-x-4">
  <a class="p-4" href="{base}/">
    <img src={logo} alt="JF Brand Icon" class="w-12 h-12 sm:w-24 sm:h-24 svg"/>
  </a>
  <div class="flex p-2 gap-x-8">
    {#each pages as page}
      <a class="text-tin-500 hover:underline" href="{base}{page.path}"><b>{page.name}</b></a>
    {/each}
  </div>
</div>
<div class="w-full py-2 sm:py-1"/>

<style>
  .svg {
    filter: invert(35%) sepia(10%) saturate(215%) hue-rotate(355deg) brightness(93%) contrast(88%);
  }
</style>

