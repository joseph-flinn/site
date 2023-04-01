<script>
  import "../public/global.css";
  import "../public/fonts.css";
  import NavBar from '$lib/NavBar.svelte';
  import Footer from '$lib/Footer.svelte';

  import { pages } from '../data.js';
</script>


<div class="fullh-container">
  <div class="side"/>
  <div class="page">
    <NavBar pages={pages}/>
    <div class="spacer"/>
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

  .spacer {
    width: 100%;
    padding: 2em 0em 2em 0em;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  @media only screen and (max-width: 800px) {
    .page {
      width: 100vw;
    }
  }

  @media only screen and (max-width: 800px) {
    .spacer {
      padding: 0.25em 0em 0.25em 0em;
    }
  }
</style>


