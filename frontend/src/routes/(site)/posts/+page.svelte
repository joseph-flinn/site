<script>
  export let data;

  import { page } from '$app/stores';  
  import { goto } from '$app/navigation';
  import PageTitle from "$lib/components/PageTitle.svelte";
  import { log } from '$lib/utils/logger.js';

  //const posts = Object.values(data).sort((postA, postB) => postA.published > postB.published ? -1 : 1)
  //log('routes/posts', `data: ${JSON.stringify(data, null, 2)}`);
  const posts = data.data.sort((postA, postB) => postA.published > postB.published ? -1 : 1)

  let screenSize;
</script>

<svelte:window bind:innerWidth={screenSize}/>

<PageTitle name="posts"/>
<div style="padding: 1em; display: flex; flex-direction: column;">
{#each posts as post}
  <div 
    class="post-item" 
    on:click={() => {
      goto(`${$page.url.pathname}/${post.slug}`).then(() => {})
    }}
  >
    {#if screenSize > 800}
      <b>{post.published}</b>
      <a href=""> - {post.title}</a>
    {:else}
      <div style="font-size: 12px;"><b>{post.published}</b></div>
      <div style="font-size: 14px; color: #8a8885;">{post.title}</div>
    {/if}
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
