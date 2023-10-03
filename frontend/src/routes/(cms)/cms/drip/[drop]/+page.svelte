<script>
  import Button from '$lib/components/Button.svelte';
  import Card from '$lib/components/Card.svelte';
  import PageTitle from '$lib/components/PageTitle.svelte';
  import UnderConstruction from '$lib/components/UnderConstruction.svelte';
  import { dropEdit } from '$lib/store.js';


  let drop = {}

  dropEdit.subscribe((value) => {
    drop = value
  })

  let dropBody = drop.body;

  const handleCancel = () => {}
  const handleSave = () => {}
</script>


<PageTitle name='Drop'/>
<div style="padding: 1.5em;">
  <Card>
    <textarea 
      placeholder='Write drop body...' 
      rows=25
      bind:value={dropBody}
    />
  </Card>
</div>
<div class='actionBar'>
  <div style='margin-left: auto'>
    <Button 
      text='Cancel'
      primary={false}
      on:click={handleCancel}
    />
    <Button
      text='Save'
      on:click={handleSave}
    />
  </div>
</div>


<style>
  .actionBar {
    padding: 1.5em;
    display: flex;
  }

  textarea {
    margin: 1.5em;
    padding: 0.75em;
    border: 0px;
    height: 70%;
    border-bottom: 2px solid #9b9894;
    outline-color: #dad9d7;
  }
</style>
