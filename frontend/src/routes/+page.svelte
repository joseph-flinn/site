<script>
  import { base } from "$app/paths";
  import { goto } from '$app/navigation';

  import SvelteMarkdown from 'svelte-markdown';

  import Card from "$lib/components/Card.svelte";
  import PageTitle from "$lib/components/PageTitle.svelte";
  import Socials from "$lib/components/Socials.svelte";
  import UnderConstruction from "$lib/components/UnderConstruction.svelte";
  import ParagraphRenderer from '$lib/renderers/ParagraphRenderer.svelte';

  import { getImageUrl } from '$lib/utils/loader.js'
  import { introCopy, popularPosts } from "$lib/config";

</script>

<div class="sm:pt-8">
  <PageTitle name="Intro" />
  <div class="px-4">
    <SvelteMarkdown 
      source={introCopy} 
      renderers={{
        paragraph: ParagraphRenderer,
      }}
    />
  </div>
  <div class="p-4"/>
  <PageTitle name="Favorite Posts" />
  <div class="px-4">
    <div class="">
      {#each popularPosts as post}
        <div 
          class="p-2" 
          on:click={() => {
            goto(`${base}/posts/${post.slug}`).then(() => {})
          }}
        >
          <div class="text-tin-700 hover:underline hover:cursor-pointer">
            {post.title}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<div class="grow" />

<Socials/>
