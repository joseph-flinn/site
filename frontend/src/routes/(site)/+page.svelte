<script>
  import PageTitle from "$lib/components/PageTitle.svelte";
  import Card from "$lib/components/Card.svelte";
  import Toggle from "$lib/components/Toggle.svelte";

  import TabbedCard from "$lib/components/TabbedCard.svelte";
  import UnderConstruction from "$lib/components/UnderConstruction.svelte";

  import data from '$lib/assets/data.json';

</script>



<div class="titleWrapper">
  <PageTitle name="skills"/>
</div>
<TabbedCard data={data.skillsData}>
</TabbedCard>

<div style="padding: 2em; text-align: right;">
    <a href="https://blog-images.flinnlab.com/resume-joseph-flinn.pdf">Resume (PDF)</a>
</div>

