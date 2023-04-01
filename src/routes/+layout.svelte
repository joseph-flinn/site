<script>
  import "../public/global.css";
  import "../public/fonts.css";
  import NavBar from '$lib/NavBar.svelte';
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';

  import { pages } from '../data.js';
</script>


<div class="fullh-container">
  <div class="side"/>
  <div class="page">
    <Header pages={pages}/>
    <div class="page-content">
      <slot></slot>
    </div>
    <Footer />
  </div>
  <div class="side"/>
</div>


<style>
  .fullh-container {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    overflow-y: auto;
  }

  .side {
    flex-grow: 1;
  }

  .page {
    width: 800px;
    display: flex;
    flex-direction: column;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  @media only screen and (max-width: 600px) {
    .page {
      width: 100vw;
    }
  }
</style>


