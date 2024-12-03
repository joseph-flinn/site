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

<div class='dripList'>
  {#each drip as drop}
    <div class='dropView'>
      <div class='dropTime'>
        <b><i>{myDateFormat(drop.created_at)}</i></b>
      </div>
      <div class='dropMessage'>
        <SvelteMarkdown 
          source={drop.message}
          renderers={{
            blockquote: QuoteRenderer,
            code: CodeRenderer,
            paragraph: ParagraphRenderer
          }}
        />
      </div>
    </div>
  {/each}
</div>


<style>
  .dripList {
    display: flex;
    flex-direction: column;
  }

  .dropView {
    display: flex;
  }

  .dropTime {
    font-size: 14px;
    color: #a1a09d;
  }

  .dropMessage {
    font-size: 16px;
    padding: 0.75em;
  }

  @media only screen and (max-width: 800px) and (min-width: 300px) {
    .dropView {
      flex-direction: column;
    }
    .dropTime {
      padding: 1em 0.75em 0em 0.75em;
    }
  }

  @media only screen and (min-width: 800px) {
    .dropView {
      flex-direction: row;
    }

    .dropTime {
      flex-basis: 100px;
      flex-shrink: 0;
      border-right: 2px solid #9b9894; 
      padding: 0.75em;
    }
  }
</style>
