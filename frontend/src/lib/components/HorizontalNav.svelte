<script>
  export let pages;

  import { base } from "$app/paths";
  import logo from "$lib/assets/jf-icon.svg";

  pages = [
    ...pages,
    { name: "rss", path: "https://joseph.flinnlab.com/rss.xml"}
  ];

</script>


<div class="flex py-2 gap-x-4">
  <a class="p-4" href="{base}/">
    <img src={logo} alt="JF Brand Icon" class="w-12 h-12 sm:w-24 sm:h-24 svg"/>
  </a>
  <div class="flex p-2 gap-x-4 md:gap-x-8">
    {#each pages as page}
      <a 
        class="hover:underline {page.name == 'rss' ? 'text-tin-100': 'text-tin-500'}" 
        href="{base}{page.path}"
      ><b>{page.name}</b></a>
    {/each}
  </div>
</div>

<style>
  .svg {
    filter: invert(35%) sepia(10%) saturate(215%) hue-rotate(355deg) brightness(93%) contrast(88%);
  }
</style>

