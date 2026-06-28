<script>
  const bannerContent = {
    message: "No LLM-generated content",
    link: "/about"
  };
</script>

<div class="dark:bg-tin-100 bg-tin-300 py-0.25 px-4 w-full">
  <div class="max-w-4xl mx-auto flex items-center justify-center gap-4">
    <span class="text-sm dark:text-tin-800 text-tin-100">
      {bannerContent.message}
    </span>
    {#if bannerContent.link}
      <a
        href={bannerContent.link}
        class="text-sm font-medium dark:text-tin-600 text-tin-600 hover:underline"
      >
        My LLM values &rarr;
      </a>
    {/if}
  </div>
</div>
