<script>
  export let data;
  import PageTitle from "$lib/components/PageTitle.svelte";

  const drip = data.data.map((drop) => ({
    message: drop.message,
    created_at: new Date(drop.created_at)
  }));

  const myDateFormat = (date) => {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}\n` +
           `${date.getHours()}:${date.getMinutes()}`
  }
</script>


<PageTitle name="drip"/>

<div class='dripList'>
  {#each drip as drop}
    <div class='dropView'>
      <div class='dropTime'>
        {myDateFormat(drop.created_at)}
      </div>
      <div class='dropMessage'>
        {drop.message}
      </div>
    </div>
  {/each}
</div>


<style>
  .dripList {
    display: flex;
    flex-direction: column;
  }
  .dropView {
    display: flex;
    flex-direction: row;
  }
  .dropTime {
    width: 100px;
    font-size: 14px;
    border-right: 2px solid #9b9894; 
    padding: 0.5em;
  }
  .dropMessage {
    flex: auto;
    padding: 0.5em;
  }
</style>
