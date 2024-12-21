<script>
  import { goto } from "$app/navigation";

  import cvDownloadIcon from "$lib/assets/cv-download-icon.svg";

  const data = [
      {"link":"https://joseph.flinnlab.com/rss.xml", "icon": "fa-rss", "extra": ""},
      {"link":"https://linkedin.com/in/joseph-flinn", "icon": "fa-linkedin-square", "extra": ""},
      {"link":"https://github.com/joseph-flinn", "icon": "fa-github", "extra": ""},
      {"link":"https://blog-images.flinnlab.com/resume-joseph-flinn.pdf", "icon": "fa-download", "extra": "CV"},
  ];

</script>


<div class="flex p-8 text-center">
  {#each data as link}
    <div 
      class="flex-grow ml-auto px-1 py-2 rounded-md text-center hover:bg-gray-100 hover:cursor-pointer"
      on:click={() => {
        window.location.href = link.link;
      }}
    >
      <i class="fa {link.icon}"/>
      {#if link.extra != ""}
       {link.extra}
      {/if}
    </div>
  {/each}
</div>
