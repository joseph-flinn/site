<script>
  import CentralColumn from '$lib/layouts/CentralColumn.svelte';

  import HorizontalNav from '$lib/components/HorizontalNav.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import data from '$lib/assets/data.json';
</script>

<CentralColumn>
  <HorizontalNav pages={data.pages.site}/>
  <div class="page-content">
    <slot></slot>
  </div>
  <Footer />
</CentralColumn>

<style>
  .page-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
</style>


