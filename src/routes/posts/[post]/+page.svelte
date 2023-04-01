<script>
  export let data;

  const { title, date, ...rest } = data;

  const body = rest.body.split("\n\n");
  const wordCount = body.reduce((sum, paragraph) => sum += paragraph.split(" ").length , 0)
</script>


<div style="width: 100%; text-align: center; font-size: 24px;">
  <div style="padding: 1em;">
    {title}
  </div>
</div>
<div style="display: flex; width: 100%;">
  <div style="flex-grow: 1; padding: 1em;">
    {date}
  </div>
  <div style="padding: 1em;">
    {Math.round( wordCount / 200)} mins
  </div>
</div>
<div style="padding: 1em;">
  {#each body as paragraph}
    <p>{paragraph}</p>
  {/each}
</div>


<style>
  p {
    text-align: justify;
    text-justify: auto;
  }
</style>
