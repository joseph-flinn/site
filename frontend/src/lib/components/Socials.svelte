<script>

  import { goto } from "$app/navigation";
  import cvDownloadIcon from "$lib/assets/cv-download-icon.svg";
  import linkedinIcon from "$lib/assets/linkedin-brands-solid.svg"
  import githubIcon from "$lib/assets/github-brands-solid.svg"

  const data = [
    {
      link:"https://linkedin.com/in/joseph-flinn", 
      img: linkedinIcon,
      alt: "LinkedIn logo"
    },
    {
      link:"https://github.com/joseph-flinn", 
      img: githubIcon,
      alt: "GitHub logo"
    },
    {
      link:"https://blog-images.flinnlab.com/resume-joseph-flinn.pdf", 
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
        goto(link.link);
      }}
    >
      <img 
        class="w-8 h-8 icon-svg"
        src={link.img} 
        alt={link.alt} 
      />
    </div>
  {/each}
</div>
