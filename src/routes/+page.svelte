<script>
  import PageTitle from "$lib/PageTitle.svelte";
  import Card from "$lib/Card.svelte";
  import Toggle from "$lib/Toggle.svelte";

  import TabbedCard from "$lib/TabbedCard.svelte";
  import UnderConstruction from "$lib/UnderConstruction.svelte";

  import data from '../data.json';

</script>



<div class="titleWrapper">
  <PageTitle name="skills"/>
</div>
<TabbedCard data={data.skillsData}>
</TabbedCard>
<div style="padding: 2em;"/>
<div class="titleWrapper">
  <PageTitle name="popular"/>
</div>
<UnderConstruction/>
