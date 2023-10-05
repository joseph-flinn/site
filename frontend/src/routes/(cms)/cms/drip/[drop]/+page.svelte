<script>
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';

  import { 
      PUBLIC_DATASOURCE_TYPE,  
      PUBLIC_DATASOURCE,
  } from '$env/static/public';

  import Button from '$lib/components/Button.svelte';
  import Card from '$lib/components/Card.svelte';
  import PageTitle from '$lib/components/PageTitle.svelte';
  import UnderConstruction from '$lib/components/UnderConstruction.svelte';
  import { token, dropEdit } from '$lib/store.js';


  let authToken = '';
  let drop = {}

  dropEdit.subscribe((value) => {
    drop = value
  })

  token.subscribe((value) => {
    authToken = value
  })

  let dropBody = drop.message

  const handleCancel = () => {
    goto(`${base}/cms/drip`)
  }

  const handleSave = () => {
    const res = fetch(`${PUBLIC_DATASOURCE}/drip`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: drop.id,
        message: dropBody
      })
    }).then((resp) => {
      return resp.text()
    }).then((respText) => {
      console.log(respText)
      goto(`${base}/cms/drip`)
    })
  }

  
 
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
      handleClick={handleCancel}
    />
    <Button
      text='Save'
      handleClick={handleSave}
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
