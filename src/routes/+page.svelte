<script>
  import PageTitle from "$lib/PageTitle.svelte";
  import Card from "$lib/Card.svelte";
  import Toggle from "$lib/Toggle.svelte";

  import SkillsCard from "$lib/SkillsCard.svelte";
  import TabbedCard from "$lib/TabbedCard.svelte";
  import UnderConstruction from "$lib/UnderConstruction.svelte";

  import { skillsData } from '../data.js';
  import { skillsDataObj } from '../data.js';


  let toggleValue = true;
  let skillArea = skillsData[Number(toggleValue)].area;
  let skills = skillsData[Number(toggleValue)].skills;

  const handleClick = () => {
    toggleValue = !toggleValue;
    skillArea = skillsData[Number(toggleValue)].area;
    skills = skillsData[Number(toggleValue)].skills;
    console.log(`handling toggle\n${skillArea}`);
  }
</script>



<div class="titleWrapper">
  <PageTitle name="skills"/>
</div>
<TabbedCard data={skillsDataObj}>
</TabbedCard>
<div class="titleWrapper">
  <PageTitle name="popular"/>
</div>
<Card>
  <UnderConstruction/>
</Card>
