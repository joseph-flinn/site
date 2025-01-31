<script>
  export let data;

  import TailwindSvelteMarkdown from '$lib/components/TailwindSvelteMarkdown.svelte';

  console.log(data)

  //const { title, published, description, Content } = data;
  //const readEstimate = 0;
  //const wordCount = data.content.split(" ").reduce((sum, word) => sum += (word != "") ? 1 : 0, 0);
  //const readEstimate = Math.round( wordCount / 200)

  //<TailwindSvelteMarkdown source={data.content} />
</script>


<article class="prose prose-tin max-w-none">
  <svelte:component this={data.content} />
</article>
