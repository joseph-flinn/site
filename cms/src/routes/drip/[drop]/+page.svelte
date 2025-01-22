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
    goto(`${base}/drip`)
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
      goto(`${base}/drip`)
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
      goto(`${base}/drip`)
    })
   }
</script>


<PageTitle name='Drop'/>
<div class="p-6">
  <Card>
    <textarea 
      class="p-3 w-full border-2 border-tin-200 border-b-tin-500 outline-tin-300"
      placeholder='Write drop body...' 
      autofocus
      rows=25
      bind:value={dropBody}
    />
  </Card>
</div>
<div class='flex p-6'>
  {#if $dropEdit.id !== 'new'}
  <div>
    <Button 
      text='Cancel'
      primary={false}
      handleClick={handleCancel}
    />
  </div>
  {/if}
  <div class="ml-auto">
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
  <div class="flex flex-col p-4">
    <div class="p-4 text-tin-900">
      Are you sure you want to delete this drop?
    </div>
    <div class="flex pt-4">
      <div class="ml-auto p-4">
      <Button 
        text='No'
        primary={false}
        handleClick={() => {showModal = false}}
      />
    </div>
    <div class="mr-auto p-4">
      <Button 
        text='Yes'
        handleClick={handleAffirmDelete}
      />
    </div>
  </div>
</Modal>
