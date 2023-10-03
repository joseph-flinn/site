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
  <div class='loginbox'>
    <Card>
      <div style='display: flex; flex-direction: column; padding: 3em;'>
        <div style='display: flex;'>
          <label>
            <div style='margin-top: auto; margin-bottom: auto'>
              token:
            </div>
            <input bind:value={tokenData} name='token' type='password'>
          </label>
        </div>
        <Button 
          text="Save"
          {handleClick}
        />
    </Card>
  </div>
</CentralColumn>


<style>
  .loginbox {
    margin-top: auto;
    margin-bottom: auto;
    width: 100%;
  }

  label {
    display: flex;
    flex-grow: 1;
    margin: 1em;
  }

  input[type=password] {
    padding: 0.5em;
    flex-grow: 1;
    margin: 1em;
    color: #5c5955;
    font-size: 16px;
    border: none;
    border-bottom: 2px solid #5c5955;
  }

  input[type=password]:focus {
    background-color: #f8f8f8f8;
    outline: none;
    border-bottom: 2px solid #5c5955;
  }

</style>
