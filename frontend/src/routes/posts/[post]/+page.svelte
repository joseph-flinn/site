<script>
  export let data;
  import SvelteMarkdown from 'svelte-markdown';
  import CodeComponent from '$lib/renderers/CodeComponent.svelte';

  const { title, published, body, ...rest } = data.post;

  const wordCount = body.split(" ").reduce((sum, word) => sum += (word != "") ? 1 : 0, 0);
  const readEstimate = Math.round( wordCount / 200)
</script>


<div style="width: 100%; text-align: center; font-size: 24px;">
  <div style="padding: 1em;">
    {title}
  </div>
</div>
<div style="display: flex; width: 100%;">
  <div style="flex-grow: 1; padding: 1em;">
    {published}
  </div>
  <div style="padding: 1em;">
    {readEstimate} mins
  </div>
</div>
<div style="padding: 1em;">
  <SvelteMarkdown 
    source={body} 
    renderers={{ code: CodeComponent }}
  />
</div>
