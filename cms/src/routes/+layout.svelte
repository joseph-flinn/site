<script>
  import "../app.css";

  import { goto } from '$app/navigation'
  import { base } from '$app/paths'

  import Button from '$lib/components/Button.svelte'
  import Card from '$lib/components/Card.svelte'
  import CentralColumn from '$lib/layouts/CentralColumn.svelte'
  import VerticalNav from '$lib/components/VerticalNav.svelte'

  import { token } from '$lib/store.js'

  let tokenInputData = '';

  $: authToken = $token; 

  const handleClick= () => {
    token.set(tokenInputData);
  }

  console.log(`Layout Token: ${authToken}`)
</script>

{#if authToken != null}
<div class="absolute h-full w-full flex">
  <VerticalNav />
  <div class="flex flex-col grow">
    <div class="h-14 bg-tin-200"/>
    <slot></slot>
  </div>
</div>
{:else}
<CentralColumn>
  <div class='mt-auto mb-auto w-full'>
    <Card>
      <div class='flex flex-col p-12'>
        <div class='flex'>
          <label class='flex grow m-4'>
            <div class='mt-auto mb-auto'>
              token:
            </div>
            <input 
              class='grow p-2 m-4 border-b-2 border-b-tin-900 focus:bg-tin-200 focus:outline-0'
              bind:value={tokenInputData} 
              name='token' 
              type='password'
            >
          </label>
        </div>
        <Button 
          text="Submit"
          {handleClick}
        />
    </Card>
  </div>
</CentralColumn>
  
{/if}
