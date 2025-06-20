<script>
  export let data;

  import { page } from '$app/stores';  
  import { goto } from '$app/navigation';
  import PageTitle from "$lib/components/PageTitle.svelte";
  import { log } from '$lib/utils/logger.js';

  let screenSize;
</script>

<svelte:window bind:innerWidth={screenSize}/>

<PageTitle name="Posts"/>
<div class="flex p-2 flex-col">
{#each data.posts as post}
  <div 
    class="p-2" 
    on:click={() => {
      goto(`${$page.url.pathname}/${post.slug}`).then(() => {})
    }}
  >
    {#if screenSize > 800}
      <div class="flex">
        <div class="pr-4 font-black">{post.published}</div>
        <div class="text-tin-700 hover:underline hover:cursor-pointer">
          {post.title}
        </div>
      </div>
    {:else}
      <div class="text-xs"><b>{post.published}</b></div>
      <div class="text-tin-700 hover:underline hover:cursor-pointer">
        {post.title}
      </div>
    {/if}
  </div>
{/each}
</div>
