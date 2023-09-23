<div class="fullh-container">
  <div class="side"/>
  <div class="page">
    <slot></slot>
  </div>
  <div class="side"/>
</div>


<style>
  .fullh-container {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    overflow-y: scroll;
    overflow-x: clip;
  }

  .side {
    flex-grow: 1;
  }

  .page {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 600px) and (min-width: 300px) {
    .page {
      width: 100vw;
    }
  }

  @media only screen and (min-width: 800px) {
    .page {
      width: 800px;
    }
  }
</style>


