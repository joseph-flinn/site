<script>
  export let href = "";
  export let title = undefined;
  export let text = "";

  import { getImageUrl } from '$lib/utils/loader.js'

  const imgUrl = href.startsWith("/posts") ? getImageUrl(href) : href
</script>

<div>
  <img
    src={imgUrl}
    alt={text}
    class="center"
  />
  <div class="imgTitle">{text}</div>
</div>


<style>
  .center {
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 2em;
    margin-bottom: 0.5em;
    width: 100%;
  }

  .imgTitle {
    font-size: 12px;
    margin-bottom: 2em;
    text-align: center;
  }
</style>
