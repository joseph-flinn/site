<script>
  export let data;

  import { page } from '$app/stores';  
  import PageTitle from "$lib/components/PageTitle.svelte";
  import { log } from '$lib/utils/logger.js';

  //const posts = Object.values(data).sort((postA, postB) => postA.published > postB.published ? -1 : 1)
  log('routes/posts', `data: ${JSON.stringify(data, null, 2)}`);
  const posts = data.data.sort((postA, postB) => postA.published > postB.published ? -1 : 1)
</script>


<PageTitle name="posts"/>
<div style="padding: 1em;">
{#each posts as post}
  <div class="post-item">
    <a href="{$page.url.pathname}/{post.slug}">{post.published} - {post.title}</a>
  </div>
{/each}
</div>


<style>
  .post-item {
    padding: 0.5em;
  }

  a:hover {
    font-weight: 700;
  }
</style>
