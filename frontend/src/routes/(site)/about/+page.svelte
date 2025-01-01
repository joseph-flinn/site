<script>
  import SvelteMarkdown from 'svelte-markdown';

  import Card from "$lib/components/Card.svelte";
  import PageTitle from "$lib/components/PageTitle.svelte";
  import Socials from "$lib/components/Socials.svelte";

  import ParagraphRenderer from '$lib/renderers/ParagraphRenderer.svelte';

  import data from '$lib/assets/data.json';

</script>

<div class="sm:pt-8">
  <PageTitle name="About" />
  <div class="px-4">
    <SvelteMarkdown 
      source={data.about} 
      renderers={{
        paragraph: ParagraphRenderer,
      }}
    />
  </div>
  <PageTitle name="Expertise" />
  <div class="columns-1 gap-y-4 sm:columns-2">
    {#each Object.entries(data.skillsData) as [areaName, areaData]}
      <Card title={areaName}>
        <ul class="list-disc list-outside pl-8 break-inside-avoid-column">
          {#each areaData as item}
            <li>{item}</li>
          {/each}
        </ul>
      </Card>
    {/each}
  </div>
</div>

<div class="grow" />

<Socials/>
