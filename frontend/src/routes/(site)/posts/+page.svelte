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
      <div style="display: flex">
        <div style="font-weight: 900; padding: 0em 1.5em 0em 0em;">{post.published}</div>
        <div class="post-title">{post.title}</div>
      </div>
    {:else}
      <div style="font-size: 12px;"><b>{post.published}</b></div>
      <div style="font-size: 14px;" class="post-title">{post.title}</div>
    {/if}
  </div>
{/each}
</div>


<style>
  .post-item {
    padding: 0.5em;
  }

  .post-title {
    color: #8A8885;
  }

  .post-title:hover {
    text-decoration: underline;
  }

  a:hover {
    font-weight: 700;
  }
</style>
