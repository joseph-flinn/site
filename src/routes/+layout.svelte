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
    <div style="width: 100%; padding: 2em 0em 2em 0em;"/>
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

  .page-content {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 800px) {
    .page {
      width: 100vw;
    }
  }
</style>


