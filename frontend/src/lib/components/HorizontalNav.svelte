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
    <img 
      class="w-12 h-12 sm:w-24 sm:h-24 icon-svg"
      src={logo} 
      alt="JF Brand Icon" 
    />
  </a>
  <div class="flex p-2 gap-x-4 md:gap-x-8">
    {#each pages as page}
      <a 
        class="no-underline hover:underline {page.name == 'rss' ? 'text-tin-500': 'text-tin-900'}" 
        href="{base}{page.path}"
      ><b>{page.name}</b></a>
    {/each}
  </div>
</div>
