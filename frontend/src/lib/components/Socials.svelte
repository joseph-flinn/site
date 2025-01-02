<script>
  import cvDownloadIcon from "$lib/assets/cv-download-icon.svg";

  const data = [
    {
      link:"https://linkedin.com/in/joseph-flinn", 
      type: "icon", 
      icon: "fa-linkedin-square"},
    {
      link:"https://github.com/joseph-flinn", 
      type: "icon", 
      icon: "fa-github"},
    {
      link:"https://blog-images.flinnlab.com/resume-joseph-flinn.pdf", 
      type: "img", 
      img: cvDownloadIcon, 
      alt: "Download CV"
    },
  ];

</script>


<div class="flex p-8 text-center">
  {#each data as link}
    <div 
      class="flex-grow flex justify-center ml-auto px-1 py-2 rounded-md text-center hover:bg-gray-100 hover:cursor-pointer"
      on:click={() => {
        window.location.href = link.link;
      }}
    >
      {#if link.type === "img"}
        <img 
          class="w-8 h-8 icon-svg"
          src={link.img} 
          alt={link.alt} 
        />
      {:else}
        <i class="text-xl fa {link.icon}"/>
      {/if}
    </div>
  {/each}
</div>
