<script context="module">
</script>

<script>
  export let title;
  export let published;
  export let description;
  export let slug;

  import { formatDate } from '$lib/utils/date.js';

  const readEstimate = 0;
  //const wordCount = data.content.split(" ").reduce((sum, word) => sum += (word != "") ? 1 : 0, 0);
  //const readEstimate = Math.round( wordCount / 200)

  //<TailwindSvelteMarkdown source={data.content} />
</script>



<div class="w-full text-center text-xl">
  <div class="p-4">
    {title}
  </div>
</div>

<div class="flex w-full">
    <div class="grow p-2">
    {formatDate(published)}
  </div>
  <div class="p-2">
    {readEstimate} mins
  </div>
</div>

<div class="py-8 px-4">
  <slot />
</div>
