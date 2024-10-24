<script>
    const data = [
        {"link":"https://linkedin.com/in/joseph-flinn", "icon": "fa-linkedin-square", "extra": ""},
        {"link":"https://github.com/joseph-flinn", "icon": "fa-github", "extra": ""},
        {"link":"https://blog-images.flinnlab.com/resume-joseph-flinn.pdf", "icon": "fa-download", "extra": "CV"},
    ];

</script>


<div style="display: flex; padding: 2em; text-align: center;">
  {#each data as link}
    <a style="flex: 1;" href={link.link}>
      <i class="fa {link.icon}"/>
      {#if link.extra != ""}
       {link.extra}
      {/if}
    </a>
  {/each}
</div>
