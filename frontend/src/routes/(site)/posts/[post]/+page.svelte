<script>
  export let data;

  import { log } from '$lib/utils/logger.js';
  import TailwindSvelteMarkdown from '$lib/components/TailwindSvelteMarkdown.svelte';

  const { title, published, body, description, ...rest } = data.data;
  const wordCount = body.split(" ").reduce((sum, word) => sum += (word != "") ? 1 : 0, 0);
  const readEstimate = Math.round( wordCount / 200)
</script>

<svelte:head>
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={window.location.href} />
</svelte:head>

<div class="w-full text-center text-xl">
  <div class="p-4">
    {title}
  </div>
</div>
<div class="flex w-full">
    <div class="grow p-2">
    {published}
  </div>
  <div class="p-2">
    {readEstimate} mins
  </div>
</div>
<div class="py-8 px-4">
  <TailwindSvelteMarkdown source={body} />
</div>

