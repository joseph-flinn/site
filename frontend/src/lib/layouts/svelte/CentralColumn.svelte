<script>
  let bannerEnabled = true;
  import GlobalBanner from '$lib/components/GlobalBanner.svelte';
</script>

<style>
</style>


<div class="flex flex-col h-full w-full">
    {#if bannerEnabled}
      <GlobalBanner />
    {/if}
  <div class="flex h-full w-full">
    <div class="grow"/>
    <div class="flex flex-col w-full w-screen md:w-[800px]">
      <slot></slot>
    </div>
    <div class="grow"/>
  </div>
</div>
