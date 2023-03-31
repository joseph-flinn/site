<script>
  import PageTitle from "$lib/PageTitle.svelte";
  import Card from "$lib/Card.svelte";
  import Toggle from "$lib/Toggle.svelte";

  import SkillsCard from "$lib/SkillsCard.svelte";

  import { skillsData } from '../data.js';


  let toggleValue = true;
  let skillArea = skillsData[Number(toggleValue)].area;
  let skills = skillsData[Number(toggleValue)].skills;

  const handleToggle = () => {
    toggleValue = !toggleValue;
    skillArea = skillsData[Number(toggleValue)].area;
    skills = skillsData[Number(toggleValue)].skills;
    console.log(`handling toggle\n${skillArea}`);
  }
</script>



<div class="titleWrapper">
  <PageTitle name="skills"/>
</div>
<SkillsCard 
  on:click={handleToggle} 
  skillArea={skillArea} 
  skills={skills}
/>
