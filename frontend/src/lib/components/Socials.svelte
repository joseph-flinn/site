<script>
    const data = [
        {"link":"https://linkedin.com/in/joseph-flinn", "icon": "fa-linkedin-square", "extra": ""},
        {"link":"https://github.com/joseph-flinn", "icon": "fa-github", "extra": ""},
        {"link":"https://blog-images.flinnlab.com/resume-joseph-flinn.pdf", "icon": "fa-download", "extra": "CV"},
    ];

</script>


<div style="display: flex; padding: 2em; text-align: center;">
  {#each data as link}
    <div 
      class="social-button"
      on:click={() => {
        goto(link.link).then(() => {})
      }}
    >
      <a href={link.link}>
        <i class="fa {link.icon}"/>
        {#if link.extra != ""}
         {link.extra}
        {/if}
      </a>
    </div>
  {/each}
</div>

<style>
  a:hover {
    text-decoration: none; 
  }

  .social-button {
    flex: 1;
    margin-left: auto;
    padding: 0.5em 1.5em 0.5em 1.5em;
    text-align: center;
    border-radius: 5px;
    border: none;
  }

  .social-button:hover {
    cursor: pointer;
    background: #eee;
  }
</style>
