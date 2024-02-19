<script>
  export let href = "";
  export let title = undefined;
  export let text = "";

  //const imgUrl = href.startsWith("http") ? href : `/src/lib${href}`
  const imgUrl = href.startsWith("http") ? href : `/src/lib${href}`

  const testImgUrl = new URL(`/src/lib${href}`, import.meta.url).href
  console.log(`imgUrl: ${imgUrl}\ntestImgUrl: ${testImgUrl}`)
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
  }

  .imgTitle {
    font-size: 12px;
    margin-bottom: 2em;
    text-align: center;
  }
</style>
