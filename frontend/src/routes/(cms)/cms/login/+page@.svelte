<script>
  import { goto } from '$app/navigation'
  import { base } from "$app/paths"

  import CentralColumn from '$lib/layouts/CentralColumn.svelte'

  import Button from '$lib/components/Button.svelte'
  import Card from '$lib/components/Card.svelte'
  import UnderConstruction from '$lib/components/UnderConstruction.svelte'

  import { token, cmsPath } from '$lib/store.js'

  let tokenData = ''
  let previousPath = ''

  const handleClick = () => {
    token.set(tokenData);

    cmsPath.subscribe((value) => {
      previousPath = value === '' ? '/cms/drip' : value
    })

    goto(`${base}${previousPath}`).then(() => {})
  }
</script>


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
              bind:value={tokenData} 
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
