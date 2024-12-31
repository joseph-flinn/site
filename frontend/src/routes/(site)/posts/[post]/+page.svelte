<script>
  export let data;

  import SvelteMarkdown from 'svelte-markdown';

  import { log } from '$lib/utils/logger.js';
  import TailwindSvelteMarkdown from '$lib/components/TailwindSvelteMarkdown.svelte';

  const { title, published, body, ...rest } = data.data;
  const wordCount = body.split(" ").reduce((sum, word) => sum += (word != "") ? 1 : 0, 0);
  const readEstimate = Math.round( wordCount / 200)
</script>


<div class="w-full text-center text-xl">
  <div class="p-2">
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
<div class="p-2">
  <TailwindSvelteMarkdown source={body} />
</div>

