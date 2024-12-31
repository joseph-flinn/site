<script>
  export let text;

  import SvelteMarkdown from 'svelte-markdown';

  const tokenizedText = text.replace(/(?:\r\n|\r|\n)/g, " ")
  const formattedText = tokenizedText.replace(/  /g, "@@").replace(/--/g, "—")
  const newText = formattedText.substring(formattedText.length - 2) == "@@" ? formattedText.substring(0, formattedText.length - 2) : formattedText
  const paragraphs = newText.split("@@")
</script>


<div class="flex p-4 bg-tin-200 border-l-4 border-tin-700 rounded-r-lg">
  <div class="grow">
    <SvelteMarkdown source={newText} />
  </div>
</div>
<div class='p-1'/>
