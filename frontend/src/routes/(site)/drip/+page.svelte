<script>
  export let data;

  import SvelteMarkdown from 'svelte-markdown';

  import PageTitle from "$lib/components/PageTitle.svelte";

  import CodeRenderer from '$lib/renderers/CodeRenderer.svelte';
  import ParagraphRenderer from '$lib/renderers/ParagraphRenderer.svelte';
  import QuoteRenderer from '$lib/renderers/QuoteRenderer.svelte';

  const drip = data.data.map((drop) => ({
    message: drop.message,
    created_at: new Date(drop.created_at)
  }));

  const myDateFormat = (date) => {
    const [pdate, pfulltime] = date.toISOString().split('T')
    const [ptime, other]= pfulltime.split('.')
    const [hours, minutes, seconds] = ptime.split(':')

    return `${pdate}\n${hours}:${minutes}`
  }
</script>


<PageTitle name="drip"/>

<div class='flex flex-col'>
  {#each drip as drop}
    <div class='flex flex-col md:flex-row'>
      <div class='dropTime p-4 pb-0 text-tin-500 md:pl-0 md:basis-32 md:shrink-0 md:text-right md:border-r-2 md:border-solid md:border-tin-150'>
        <b><i>{myDateFormat(drop.created_at)}</i></b>
      </div>
      <div class='flex-grow p-4 pt-2 md:pt-4'>
        <SvelteMarkdown 
          source={drop.message}
          renderers={{
            blockquote: QuoteRenderer,
            code: CodeRenderer
          }}
        />
      </div>
    </div>
  {/each}
</div>
