<script>
  import SvelteMarkdown from 'svelte-markdown';

  import Card from "$lib/components/Card.svelte";
  import PageTitle from "$lib/components/PageTitle.svelte";
  import Socials from "$lib/components/Socials.svelte";

  import ParagraphRenderer from '$lib/renderers/ParagraphRenderer.svelte';

  import { aboutCopy, skillsData, influentialBooks } from "$lib/config";

</script>

<div class="sm:pt-8">
  <PageTitle name="About" />
  <div class="px-4">
    <SvelteMarkdown 
      source={aboutCopy} 
      renderers={{
        paragraph: ParagraphRenderer,
      }}
    />
  </div>
  <div class="p-4"/>
  <PageTitle name="Expertise" />
  <div class="columns-1 gap-y-4 sm:columns-2">
    {#each Object.entries(skillsData) as [areaName, areaData]}
      <Card title={areaName}>
        <ul class="list-disc list-outside pl-8 break-inside-avoid-column">
          {#each areaData as item}
            <li>{item}</li>
          {/each}
        </ul>
      </Card>
    {/each}
  </div>
  <div class="p-4"/>
  <PageTitle name="Influential Books" />
  <div class="">
    <ul>
      {#each influentialBooks as book}
        <li>
          <a href={book.link}>{book.title}</a> - {book.author}
        </li>
      {/each}
    </ul>
  </div>
  <div class="p-4"/>
</div>

<div class="grow" />

<Socials/>
