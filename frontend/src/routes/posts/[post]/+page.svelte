<script>
  export let data;

  import TailwindSvelteMarkdown from '$lib/components/TailwindSvelteMarkdown.svelte';

  import { getImageUrl } from '$lib/utils/loader.js'

  console.log(data)
  let postData = data;

  const { title, published, body, description, ...rest } = postData;
  const wordCount = body.split(" ").reduce((sum, word) => sum += (word != "") ? 1 : 0, 0);
  const readEstimate = Math.round( wordCount / 200)
</script>


<article>
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
</article>
