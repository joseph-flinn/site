<script>
  export let lang;
  export let text;

  const tokenizedText = text.replace(/(?:\r\n|\r|\n)/g, " ")
  const formattedText = tokenizedText.replace(/  /g, "@@").replace(/--/g, "—")
  const newText = formattedText.substring(formattedText.length - 2) == "@@" ? formattedText.substring(0, formattedText.length - 2) : formattedText
  const paragraphs = newText.split("@@")
</script>


<div class="quote">
  <div style="flex-grow: 1;">
  {#each paragraphs as paragraph, i}
    <i>{paragraph}</i>
    {#if i != paragraphs.length - 1}
    <br><br>
    {/if}
  {/each}
  </div>
</div>


<style>
  .quote {
    display: flex;
    background: #eeeeed;
    padding: 1em;
    border-left: 3px solid #8A8885;
    font-size: 14px;
  }
</style>
