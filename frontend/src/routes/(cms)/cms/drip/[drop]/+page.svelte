<script>
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';

  import { 
      PUBLIC_DATASOURCE_TYPE,  
      PUBLIC_DATASOURCE,
  } from '$env/static/public';

  import Button from '$lib/components/Button.svelte';
  import Card from '$lib/components/Card.svelte';
  import Modal from '$lib/components/Modal.svelte';
  import PageTitle from '$lib/components/PageTitle.svelte';
  import { token, dropEdit } from '$lib/store.js';

  let dropBody = $dropEdit.message

  const handleCancel = () => {
    goto(`${base}/cms/drip`)
  }

  const handleSave = () => {
    const bodyData = $dropEdit.id !== 'new' ? { id: $dropEdit.id, message: dropBody } : { message: dropBody }
    const res = fetch(`${PUBLIC_DATASOURCE}/drip`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${$token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData)
    }).then((resp) => {
      return resp.text()
    }).then((respText) => {
      goto(`${base}/cms/drip`)
    })
  }

  let showModal = false;

   const handleAffirmDelete = () => {
    const res = fetch(`${PUBLIC_DATASOURCE}/drip/${$dropEdit.id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${$token}`,
        'Content-Type': 'application/json'
      },
    }).then((resp) => {
      return resp.text()
    }).then((respText) => {
      goto(`${base}/cms/drip`)
    })
   }
</script>


<PageTitle name='Drop'/>
<div style="padding: 1.5em;">
  <Card>
    <textarea 
      placeholder='Write drop body...' 
      autofocus
      rows=25
      bind:value={dropBody}
    />
  </Card>
</div>
<div class='actionBar'>
  {#if $dropEdit.id !== 'new'}
  <div>
    <Button 
      text='Cancel'
      primary={false}
      handleClick={handleCancel}
    />
  </div>
  {/if}
  <div style='margin-left: auto'>
    <Button 
      text='Delete'
      primary={false}
      handleClick={() => {showModal = true}}
    />
    <Button
      text='Save'
      handleClick={handleSave}
    />
  </div>
</div>

<Modal bind:showModal>
  <div style='display: flex; flex-direction: column; padding: 1em;'>
    <div style='color: #5c5955; padding: 1em'>
      Are you sure you want to delete this drop?
    </div>
    <div style='display: flex; flex-direction: row; padding-top: 1em;'>
      <div style='margin-left: auto; padding: 1em;'>
      <Button 
        text='No'
        primary={false}
        handleClick={() => {showModal = false}}
      />
    </div>
    <div style='margin-right: auto; padding: 1em;'>
      <Button 
        text='Yes'
        handleClick={handleAffirmDelete}
      />
    </div>
  </div>
</Modal>


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
