<script>
  import "../public/global.css";
  import "../public/fonts.css";
  import NavBar from '$lib/NavBar.svelte';

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
  </div>
  <div class="side"/>
</div>


<style>
  .fullh-container {
    display: flex;
    height: 100vw;
  }

  .side {
    flex-grow: 1;
    background-color: lightgrey;
  }

  .page {
    width: 800px;
  }

  .spacer {
    width: 100%;
    padding: 2em 0em 2em 0em;
  }

  .page-content {
    display: flex;
    flex-direction: column;
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


