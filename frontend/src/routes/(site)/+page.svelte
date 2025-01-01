<script>
  import SvelteMarkdown from 'svelte-markdown';

  import Card from "$lib/components/Card.svelte";
  import PageTitle from "$lib/components/PageTitle.svelte";
  import Socials from "$lib/components/Socials.svelte";
  import UnderConstruction from "$lib/components/UnderConstruction.svelte";

  import ParagraphRenderer from '$lib/renderers/ParagraphRenderer.svelte';

  import data from '$lib/assets/data.json';

</script>

<div class="sm:pt-8">
  <PageTitle name="Intro" />
  <div class="px-4">
    <SvelteMarkdown 
      source={data.intro} 
      renderers={{
        paragraph: ParagraphRenderer,
      }}
    />
  </div>
  <PageTitle name="Popular" />
  <div class="px-4">
    <UnderConstruction />
  </div>
</div>

<div class="grow" />
