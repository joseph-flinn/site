<script>
  import PageTitle from "$lib/components/PageTitle.svelte";
  import Card from "$lib/components/Card.svelte";
  import Toggle from "$lib/components/Toggle.svelte";

  import TabbedCard from "$lib/components/TabbedCard.svelte";
  import Socials from "$lib/components/Socials.svelte";
  import UnderConstruction from "$lib/components/UnderConstruction.svelte";

  import data from '$lib/assets/data.json';

</script>

<div>
  <div class="titleWrapper">
    <PageTitle name="skills"/>
  </div>
  <TabbedCard data={data.skillsData}/>
</div>

<div style="flex-grow: 1;"/>

<Socials/>
