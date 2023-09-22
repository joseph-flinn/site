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
<div style="padding: 2em;"/>
<div class="titleWrapper">
  <PageTitle name="popular"/>
</div>
<UnderConstruction/>
